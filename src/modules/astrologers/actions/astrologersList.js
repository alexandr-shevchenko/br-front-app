import { createAction } from 'redux-actions';
import fetch from '../../../helpers/fetch';
import routesPathApi from '../../routesPathApi';

export const getAstrologersList = createAction('ASTROLOGER_GET_ASTROLOGERS_LIST');
export const getAstrologersListSuccess = createAction('ASTROLOGER_GET_ASTROLOGERS_LIST_SUCCESS');
export const getAstrologersListError = createAction('ASTROLOGER_GET_ASTROLOGERS_LIST_ERROR');

export function getAstrologersListAsync() {
    const url = routesPathApi.getAstrologersList();

    return dispatch => {
        dispatch(getAstrologersList());

        fetch(url)
            .then(response => response.json())
            .then(data => {
                dispatch(getAstrologersListSuccess(data));
            })
            .catch(e => {
                dispatch(getAstrologersListError());
                console.log(e.message);
            });
    };
}
