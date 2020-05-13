import * as actionTypes from './actionTypes';

export const storePersonalDetails = (personalDetails) =>{
    return{
        type: actionTypes.STORE_PERSONAL_DETAILS,
        newPersonalInfo: personalDetails
    };
};

export const resetPersonalDetails =() => {
    return {
        type: actionTypes.PERSONAL_DETAILS_RESET
    };
};