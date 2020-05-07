import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import PersonalInfoFields from '../../components/organisms/PersonalInfoFields/PersonalInfoFields';
import { personalInfoSelector } from '../../selectors/personalInfoSelector/personalInfoSelector';

export const mapStateToProps = state => {
    return {
        persDetails: personalInfoSelector(state)
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        onStorePersonalDetails: (personalDetails) => dispatch(actions.storePersonalDetails(personalDetails))
    };
};

export const PersonalInfoFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(PersonalInfoFields);