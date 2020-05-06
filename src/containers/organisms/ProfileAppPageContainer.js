import {connect} from 'react-redux';
import ProfileAppPage from '../../components/pages/ProfileAppPage/ProfileAppPage';
import { profNextButtonDisableSelector } from '../../selectors/profNextButtonDisableSelector/profNextButtonDisableSelector';

export const mapStateToProps = state => ({
        persDetails: state.pers,
        profNextButtonDisable: profNextButtonDisableSelector(state),
});

export const ProfileAppPageContainer = connect(mapStateToProps) (ProfileAppPage)