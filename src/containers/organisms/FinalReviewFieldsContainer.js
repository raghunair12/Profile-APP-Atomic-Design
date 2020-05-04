import { connect } from 'react-redux';
// import * as actions from '../../store/actions/index';
import FinalReviewFields from '../../components/organisms/FinalReviewFields/FinalReviewFields';

export const mapStateToProps = state => {
    return {
        profDetails: state.prof,
        persDetails: state.pers
    }
};

// export const mapDispatchToProps = dispatch => {
//     return {
//         onStorePersonalDetails: (personalDetails) => dispatch(actions.storePersonalDetails(personalDetails))
//     };
// };

export const FinalReviewFieldsContainer = connect(mapStateToProps)(FinalReviewFields);