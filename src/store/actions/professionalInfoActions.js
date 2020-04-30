import * as actionTypes from './actionTypes';

export const storeProfessionalDetails = (professionalDetails) =>{
    return{
        type: actionTypes.STORE_PROFESSIONAL_DETAILS,
        newProfessionalInfo: professionalDetails
    };
};
