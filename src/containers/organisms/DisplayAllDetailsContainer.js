import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import DisplayAllDetailsPage from '../../components/pages/DisplayAllDetailsPage/DisplayAllDetailsPage';
import {fetchAllDetailsSelector} from '../../selectors/fetchAllDetailsSelector/fetchAllDetailsSelector';

export const mapStateToProps = (state) => {
    return{
        allDetails: fetchAllDetailsSelector(state)
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        onFetchAllDetails: () => dispatch(actions.fetchAllDetails()),
        onDeleteDetail: (detailId) => dispatch(actions.deleteDetail(detailId))
    }
}

export const DisplayAllDetailsContainer = connect(mapStateToProps,mapDispatchToProps) (DisplayAllDetailsPage);