import React from 'react';

import MainHeader from '../../atoms/headers/MainHeader/MainHeader';
import ToolBar from '../../atoms/toolBar/ToolBar';
import { LinkContainer } from '../../../containers/atoms/LinkContainer';

const profileAppPage = ({ persDetails, profNextButtonDisable}) => (
    <React.Fragment>
        <MainHeader>Profile App</MainHeader>
        <ToolBar>
            <LinkContainer to="/" linkDisabled= {false}>Professional Information</LinkContainer>
            <LinkContainer to="/pers" linkDisabled= {profNextButtonDisable}>Personal Information</LinkContainer>
            <LinkContainer to="/review" linkDisabled= {profNextButtonDisable || persDetails.nextDisabled}>Final Review</LinkContainer>
        </ToolBar>
    </React.Fragment>
);

export default profileAppPage;