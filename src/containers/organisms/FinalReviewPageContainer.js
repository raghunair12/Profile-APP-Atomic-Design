import {connect} from 'react-redux';
import FinalReviewPage from '../../components/pages/FinalReviewPage/FinalReviewPage';
import { professionalInfoSelector } from '../../selectors/professionalInfoSelector/professionalInfoSelector';
import { personalInfoSelector } from '../../selectors/personalInfoSelector/personalInfoSelector';

export const mapStateToProps = state => {
    return{
        profDetails: professionalInfoSelector(state),
        persDetails: personalInfoSelector(state)
    }
}

export const FinalReviewPageContainer = connect(mapStateToProps) (FinalReviewPage)