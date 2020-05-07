import React from 'react';
import PropTypes from 'prop-types';

import SubHeader from '../../atoms/headers/SubHeader/SubHeader';
import { PersonalInfoFieldsContainer } from '../../../containers/organisms/PersonalInfoFieldsContainer';
import Button from '../../atoms/button/Button';

const personalInfoPage = ({ persNextButtonDisable, history }) => {
    const onClickNextHandler = () => {
        history.push('/review');
    }
    const onClickPreviousHandler = () => {
        history.push('/');
    }
    return (
        <React.Fragment>
            <SubHeader>Personal Details</SubHeader>
            <PersonalInfoFieldsContainer />
            <Button
                onClick={onClickPreviousHandler}>Previous</Button>
            <Button
                disabled={persNextButtonDisable}
                onClick={onClickNextHandler}>Next</Button>
        </React.Fragment>
    );
}

personalInfoPage.propTypes = {
    persNextButtonDisable: PropTypes.bool,
    history: PropTypes.object
}

export default personalInfoPage;