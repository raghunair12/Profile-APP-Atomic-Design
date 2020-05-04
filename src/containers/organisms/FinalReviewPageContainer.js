import {connect} from 'react-redux';
import FinalReviewPage from '../../components/pages/FinalReviewPage/FinalReviewPage';

export const mapStateToProps = state => {
    return{
        profDetails: state.prof,
        persDetails: state.pers
    }
}

export const FinalReviewPageContainer = connect(mapStateToProps) (FinalReviewPage)