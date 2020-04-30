import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';
import ProfileAppPage from './components/pages/ProfileAppPage/ProfileAppPage';
import {ProfessionalInfoPageContainer} from './containers/organisms/ProfessionalInfoPageContainer';
import {PersonalInfoPageContainer} from './containers/organisms/PersonalInfoPageContainer';

function App() {
  return (
    <div className="App">
      <ProfileAppPage />
      <Switch>
        <Route path="/review" exact component={ProfessionalInfoPageContainer} />
        <Route path="/pers" exact component={PersonalInfoPageContainer} />
        <Route path="/" exact component={ProfessionalInfoPageContainer} />
        <Redirect to="/" /> 
      </Switch>
    </div>
  );
}

export default withRouter(App);
