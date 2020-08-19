import { handleActions } from 'redux-actions';
import {
    getAstrologersList,
    getAstrologersListError,
    getAstrologersListSuccess,
} from '../actions/astrologersList';

import initialState from './astrologersListInitialState';

export default handleActions(
    {
        [getAstrologersList]: state => ({
            ...state,
            isFetching: true,
        }),
        [getAstrologersListError]: state => ({
            ...state,
            isFetching: false,
        }),
        [getAstrologersListSuccess]: (state, { payload }) => {
            console.log(payload);
        },
    },
    initialState,
);
