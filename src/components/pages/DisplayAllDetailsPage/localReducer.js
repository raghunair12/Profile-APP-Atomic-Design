export const initialState = {
    confirmDelete: false,
    deleteClicked: false,
    // resData: [],
    deleteDetailId: '',
    selectedName: ''
}
export function reducer(state, action) {
    switch (action.type) {
        case 'ONDELETE_INIT':
            return {
                ...state,
                confirmDelete: !state.confirmDelete,
                deleteDetailId: action.detailId,
                selectedName: action.firstName + ' ' + action.lastName
            };
        case 'ONDELETE_CONTINUE':
            return {
                ...state,
                confirmDelete: !state.confirmDelete,
                deleteClicked: !state.deleteClicked,
                // resData: state.resData.filter(obj => obj.id !== state.deleteDetailId)
            }
        case 'ONDELETE_CANCEL':
            return {
                ...state,
                confirmDelete: !state.confirmDelete
            }
        // case 'SET_RESPONSE_DATA':
        //     return {
        //         ...state,
        //         resData: action.allDetails
        //     }
        case 'SET_DELETECLICKED_FALSE':
            return {
                ...state,
                deleteClicked: false
            }
        default: throw new Error();
    }
}