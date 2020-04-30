import React from 'react';
import PropTypes from 'prop-types';

import SubHeader from '../../atoms/headers/SubHeader/SubHeader';
import { ProfessionalInfoFieldsContainer } from '../../../containers/organisms/ProfessionalInfoFieldsContainer';
import Button from '../../atoms/button/Button';

const professionalInfoPage = ({ profDetails,history }) => {
    const onClickHandler = () =>{
        history.push('/pers');
    }
    return (
        <React.Fragment>
            <SubHeader>Professional Details</SubHeader>
            <ProfessionalInfoFieldsContainer />
            <Button
                disabled={profDetails.nextDisabled}
                onClick={onClickHandler}>Next</Button>
        </React.Fragment>
    );
}

professionalInfoPage.propTypes = {
    profDetails: PropTypes.object,
    history: PropTypes.object
}

export default professionalInfoPage;