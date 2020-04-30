import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import ProfessionalInfoFields from '../../components/organisms/ProfessionalInfoFields/ProfessionalInfoFields';

export const mapStateToProps = state => {
    return {
        profDetails: state.prof
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        onStoreProfessionalDetails: (professionalDetails) => dispatch(actions.storeProfessionalDetails(professionalDetails))
    };
};

export const ProfessionalInfoFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfessionalInfoFields);