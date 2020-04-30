import * as actionTypes from './actionTypes';

export const storePersonalDetails = (personalDetails) =>{
    return{
        type: actionTypes.STORE_PERSONAL_DETAILS,
        newPersonalInfo: personalDetails
    };
};