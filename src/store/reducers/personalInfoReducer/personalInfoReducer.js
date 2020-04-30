import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    gender: '',
    favMovie: '',
    phoneNo: '',
    favApp: [],
    weight: '',
    nextDisabled: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_PERSONAL_DETAILS:
            return {
                ...state,
                ...action.newPersonalInfo
            };

        default: return state;
    }
}

export default reducer;