import {connect} from 'react-redux';
import ProfessionalInfoPage from '../../components/pages/ProfessionalInfoPage/ProfessionalInfoPage';

export const mapStateToProps = state => {
    return{
        profDetails: state.prof
    }
}

export const ProfessionalInfoPageContainer = connect(mapStateToProps) (ProfessionalInfoPage)