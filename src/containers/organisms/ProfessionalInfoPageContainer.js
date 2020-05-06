import {connect} from 'react-redux';
import ProfessionalInfoPage from '../../components/pages/ProfessionalInfoPage/ProfessionalInfoPage';
import { profNextButtonDisableSelector } from '../../selectors/profNextButtonDisableSelector/profNextButtonDisableSelector';

export const mapStateToProps = state =>({
        profNextButtonDisable: profNextButtonDisableSelector(state),
    })

export const ProfessionalInfoPageContainer = connect(mapStateToProps) (ProfessionalInfoPage)