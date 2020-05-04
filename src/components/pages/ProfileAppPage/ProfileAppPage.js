import React from 'react';

import MainHeader from '../../atoms/headers/MainHeader/MainHeader';
import ToolBar from '../../atoms/toolBar/ToolBar';
import { LinkContainer } from '../../../containers/atoms/LinkContainer';

const profileAppPage = ({profDetails, persDetails}) => (
    <React.Fragment>
        <MainHeader>Profile App</MainHeader>
        <ToolBar>
            <LinkContainer to="/" linkDisabled= {false}>Professional Information</LinkContainer>
            <LinkContainer to="/pers" linkDisabled= {profDetails.nextDisabled}>Personal Information</LinkContainer>
            <LinkContainer to="/review" linkDisabled= {profDetails.nextDisabled || persDetails.nextDisabled}>Final Review</LinkContainer>
        </ToolBar>
    </React.Fragment>
);

export default profileAppPage;