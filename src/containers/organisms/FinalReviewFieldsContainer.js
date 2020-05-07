import { connect } from 'react-redux';
// import * as actions from '../../store/actions/index';
import FinalReviewFields from '../../components/organisms/FinalReviewFields/FinalReviewFields';
import {professionalInfoSelector} from '../../selectors/professionalInfoSelector/professionalInfoSelector';
import { personalInfoSelector } from '../../selectors/personalInfoSelector/personalInfoSelector';
import {persNextButtonDisableSelector} from '../../selectors/persNextButtonDisableSelector/persNextButtonDisableSelector';

export const mapStateToProps = state => ({
    profDetails: professionalInfoSelector(state),
    persDetails: personalInfoSelector(state),
    persNextButtonDisabled: persNextButtonDisableSelector()
})

export const FinalReviewFieldsContainer = connect(mapStateToProps)(FinalReviewFields);