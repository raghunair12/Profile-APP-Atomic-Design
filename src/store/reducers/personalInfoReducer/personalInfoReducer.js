import * as actionTypes from '../../actions/actionTypes';
import enableNextButton from '../../../containers/atoms/NextButtonValidation';

const initialState = {
    gender: '',
    favMovie: '',
    phoneNo: '',
    // favApp:'',
    favApp: {
        whatsapp: false,
        facebook: false
    },
    weight: '',
    nextDisabled: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_PERSONAL_DETAILS:
            const newState = {
                ...state,
                ...action.newPersonalInfo
            };
            const nextButtonUpdatedState = enableNextButton(newState);
            return {
                ...newState,
                ...nextButtonUpdatedState
            };

        default: return state;
    }
}

export default reducer;