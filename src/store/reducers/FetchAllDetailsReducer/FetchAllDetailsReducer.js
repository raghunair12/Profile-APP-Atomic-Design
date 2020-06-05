import * as actionTypes from '../../actions/actionTypes';

const initialState={
    allDetails: []
}

const reducer=(state=initialState,action) => {
    switch(action.type){
        case actionTypes.FETCHED_DETAILS:
            return{
                ...state,
                allDetails: action.fetchedDetails
            }
        
        case actionTypes.UPDATE_STATE:
            return{
                ...state,
                allDetails: state.allDetails.filter(obj => obj.id !== action.detailId)
            }
        
        default: return state
    }
}

export default reducer;