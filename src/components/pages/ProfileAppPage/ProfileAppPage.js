import React from 'react';
import PropTypes from 'prop-types';

import MainHeader from '../../atoms/headers/MainHeader/MainHeader';
import ToolBar from '../../atoms/toolBar/ToolBar';
import Link from '../../atoms/link/Link';

const profileAppPage = ({ persNextButtonDisable, profNextButtonDisable}) => (
    <React.Fragment>
        <MainHeader>Profile App</MainHeader>
        <ToolBar>
            <Link to="/" linkDisabled= {false}>Professional Information</Link>
            <Link to="/pers" linkDisabled= {profNextButtonDisable}>Personal Information</Link>
            <Link to="/review" linkDisabled= {profNextButtonDisable || persNextButtonDisable}>Final Review</Link>
            <Link to="/details" linkDisabled= {false}>All User Details</Link>
        </ToolBar>
    </React.Fragment>
);

profileAppPage.propTypes = {
    profNextButtonDisable: PropTypes.bool,
    persNextButtonDisable: PropTypes.bool
}

profileAppPage.defaultProps ={
    profNextButtonDisable: false,
    persNextButtonDisable: false
}

export default profileAppPage;