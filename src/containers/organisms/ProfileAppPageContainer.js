import {connect} from 'react-redux';
import ProfileAppPage from '../../components/pages/ProfileAppPage/ProfileAppPage';
import { profNextButtonDisableSelector } from '../../selectors/profNextButtonDisableSelector/profNextButtonDisableSelector';
import { persNextButtonDisableSelector } from '../../selectors/persNextButtonDisableSelector/persNextButtonDisableSelector';

export const mapStateToProps = state => ({
        persNextButtonDisable: persNextButtonDisableSelector(state),
        profNextButtonDisable: profNextButtonDisableSelector(state)
});

export const ProfileAppPageContainer = connect(mapStateToProps) (ProfileAppPage)