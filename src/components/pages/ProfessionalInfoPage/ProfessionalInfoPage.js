import React from 'react';
import PropTypes from 'prop-types';

import SubHeader from '../../atoms/headers/SubHeader/SubHeader';
import { ProfessionalInfoFieldsContainer } from '../../../containers/organisms/ProfessionalInfoFieldsContainer';
import Button from '../../atoms/button/Button';

const professionalInfoPage = ({profNextButtonDisable, history }) => {
    const onClickHandler = () =>{
        history.push('/pers');
    }
    return (
        <React.Fragment>
            <SubHeader>Professional Details</SubHeader>
            <ProfessionalInfoFieldsContainer />
            <Button
                disabled={profNextButtonDisable}
                onClick={onClickHandler}>Next</Button>
        </React.Fragment>
    );
}

professionalInfoPage.propTypes = {
    profNextButtonDisable: PropTypes.bool,
    history: PropTypes.object
}

export default professionalInfoPage;