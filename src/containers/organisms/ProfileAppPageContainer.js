import {connect} from 'react-redux';
import ProfileAppPage from '../../components/pages/ProfileAppPage/ProfileAppPage';

export const mapStateToProps = state => {
    return{
        profDetails: state.prof,
        persDetails: state.pers
    }
}

export const ProfileAppPageContainer = connect(mapStateToProps) (ProfileAppPage)