import * as actionTypes from '../../actions/actionTypes';
import enableNextButton from '../../../validations/NextButtonValidation/NextButtonValidation';
// import values from 'lodash/values';
// import isBoolean from 'lodash/isBoolean';

const initialState = {
    firstName: '',
    lastName: '',
    company: '',
    residingState: 'Andhra Pradesh'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_PROFESSIONAL_DETAILS:
            const newState = {
                ...state,
                ...action.newProfessionalInfo
            };
            // const nextButtonUpdatedState = values(newState).every((k) => 
            // typeof(k) === "boolean"? isBoolean(k) : (k));
            // console.log(nextButtonUpdatedState)
            const nextButtonUpdatedState = enableNextButton(newState);
            return {
                ...newState,
                ...nextButtonUpdatedState
            };

        case actionTypes.PROFESSIONAL_DETAILS_RESET:
            return {
                ...initialState
            }

        default:
            return state;
    }
}

export default reducer;