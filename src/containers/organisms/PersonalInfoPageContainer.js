import { connect } from 'react-redux';
import PersonalInfoPage from '../../components/pages/PersonalInfoPage/PersonalInfoPage';
import { persNextButtonDisableSelector } from '../../selectors/persNextButtonDisableSelector/persNextButtonDisableSelector';

export const mapStateToProps = state => ({
    persNextButtonDisable: persNextButtonDisableSelector(state)
})

export const PersonalInfoPageContainer = connect(mapStateToProps)(PersonalInfoPage)