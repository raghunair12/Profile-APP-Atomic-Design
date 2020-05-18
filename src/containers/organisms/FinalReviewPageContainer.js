import {connect} from 'react-redux';
import FinalReviewPage from '../../components/pages/FinalReviewPage/FinalReviewPage';
import { professionalInfoSelector } from '../../selectors/professionalInfoSelector/professionalInfoSelector';
import { personalInfoSelector } from '../../selectors/personalInfoSelector/personalInfoSelector';
import * as actions from '../../store/actions/index';

export const mapStateToProps = state => {
    return{
        profDetails: professionalInfoSelector(state),
        persDetails: personalInfoSelector(state)
    }
}

export const mapDispatchToProps = dispatch => {
    return{
        onResetProfessionalDetails: () => dispatch(actions.resetProfessionalDetails()),
        onResetPersonalDetails: () => dispatch(actions.resetPersonalDetails()),
        onStoreDetails: (body,headers)=> dispatch(actions.storeDetails(body,headers))
    }
}

export const FinalReviewPageContainer = connect(mapStateToProps,mapDispatchToProps) (FinalReviewPage)