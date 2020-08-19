import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import astrologers from './astrologers/reducers';

const store = createStore(
    combineReducers({
        astrologers,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
