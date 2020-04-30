import React from 'react';
import PropTypes from 'prop-types';

import SubHeader from '../../atoms/headers/SubHeader/SubHeader';
import { PersonalInfoFieldsContainer } from '../../../containers/organisms/PersonalInfoFieldsContainer';
import Button from '../../atoms/button/Button';

const personalInfoPage = ({ persDetails, history }) => {
    const onClickHandler = () => {
        history.push('/pers');
    }
    return (
        <React.Fragment>
            <SubHeader>Personal Details</SubHeader>
            <PersonalInfoFieldsContainer />
            <Button
                disabled={persDetails.nextDisabled}
                onClick={onClickHandler}>Next</Button>
        </React.Fragment>
    );
}

personalInfoPage.propTypes = {
    persDetails: PropTypes.object,
    history: PropTypes.object
}

export default personalInfoPage;