import * as actionTypes from './actionTypes';

export const storeDetails = (details) => {
    return{
        type: actionTypes.STORE_DETAILS,
        newDetails: details
    };
};