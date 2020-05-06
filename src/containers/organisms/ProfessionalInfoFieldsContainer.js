import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import ProfessionalInfoFields from '../../components/organisms/ProfessionalInfoFields/ProfessionalInfoFields';
import { professionalInfoSelector } from '../../selectors/professionalInfoSelector/professionalInfoSelector';

export const mapStateToProps = (state) => ({
    profDetails: professionalInfoSelector(state),
});

export const mapDispatchToProps = dispatch => {
    return {
        onStoreProfessionalDetails: (professionalDetails) => dispatch(actions.storeProfessionalDetails(professionalDetails))
    };
};

export const ProfessionalInfoFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfessionalInfoFields);