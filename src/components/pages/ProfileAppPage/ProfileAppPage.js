import React from 'react';

import MainHeader from '../../atoms/headers/MainHeader/MainHeader';
import ToolBar from '../../atoms/toolBar/ToolBar';
import { LinkContainer } from '../../../containers/atoms/LinkContainer';

const profileAppPage = () => (
    <React.Fragment>
        <MainHeader>Profile App</MainHeader>
        <ToolBar>
            <LinkContainer to="/">Professional Information</LinkContainer>
            <LinkContainer to="/pers" >Personal Information</LinkContainer>
            <LinkContainer to="/">Final Review</LinkContainer>
        </ToolBar>
    </React.Fragment>
);

export default profileAppPage;