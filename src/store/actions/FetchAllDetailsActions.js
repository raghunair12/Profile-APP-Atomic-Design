import * as actionTypes from '../actions/actionTypes';

export const fetchAllDetails = () => {
    return{
        type: actionTypes.FETCH_ALL_DETAILS
    }
}

export const fetchedDetails = (details) => {
    return {
        type: actionTypes.FETCHED_DETAILS,
        fetchedDetails: details
    }
}

export const deleteDetail= (detailId) => {
    return{
        type: actionTypes.DELETE_DETAIL,
        detailId: detailId
    }
}

export const updateState = (detailId) => {
    return{
        type: actionTypes.UPDATE_STATE,
        detailId: detailId
    }
}