import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    firstName: '',
    lastName: '',
    company: '',
    residingState: 'Andhra Pradesh',
    nextDisabled: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_PROFESSIONAL_DETAILS:
            return {
                ...state,
                ...action.newProfessionalInfo
            };

        default: return state;
    }
}

export default reducer;