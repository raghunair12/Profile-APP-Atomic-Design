import * as actionTypes from './actionTypes';

export const storeDetails = (body,headers) => {
    return{
        type: actionTypes.STORE_DETAILS,
        body: body,
        headers: headers
    };
};