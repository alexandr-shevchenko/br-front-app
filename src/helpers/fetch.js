import { API_HOST, API_PATH } from '../config/_entrypoint';

const jsonLdMimeType = 'application/ld+json';

export default function(url, options = {}) {
    if (typeof options.headers === 'undefined') {
        options.headers = new Headers();
    }
    if (options.headers.get('Accept') === null) {
        options.headers.set('Accept', jsonLdMimeType);
    }

    if (
        options.body !== 'undefined' &&
        !(options.body instanceof FormData) &&
        options.headers.get('Content-Type') === null
    ) {
        options.headers.set('Content-Type', jsonLdMimeType);
    }

    const link =
        !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? url.includes(API_PATH)
            ? API_HOST + url
            : API_HOST + API_PATH + url
            : API_PATH + url;

    return fetch(link, options).then(response => {
        if (response.ok) {
            return response;
        }

        return response.json().then(json => {
            const error = response.statusText;

            if (!json.violations) {
                throw Error(error);
            }

            const errors = { _error: error };

            json.violations.forEach(violation => {
                errors[violation.propertyPath] = violation.message;
            });
        });
    });
}
