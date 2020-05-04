import {connect} from 'react-redux';
import PersonalInfoPage from '../../components/pages/PersonalInfoPage/PersonalInfoPage';

export const mapStateToProps = state => {
    return{
        persDetails: state.pers
    }
}

export const PersonalInfoPageContainer = connect(mapStateToProps) (PersonalInfoPage)