import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';
import {ProfileAppPageContainer} from './containers/organisms/ProfileAppPageContainer';
import {ProfessionalInfoPageContainer} from './containers/organisms/ProfessionalInfoPageContainer';
import {PersonalInfoPageContainer} from './containers/organisms/PersonalInfoPageContainer';
import {FinalReviewPageContainer} from './containers/organisms/FinalReviewPageContainer';
import DisplayAllDetailsPage from './components/pages/DisplayAllDetailsPage/DisplayAllDetailsPage';

function App() {
  return (
    <div className="App">
      <ProfileAppPageContainer />
      <Switch>
        <Route path="/details" exact component={DisplayAllDetailsPage} />
        <Route path="/review" exact component={FinalReviewPageContainer} />
        <Route path="/pers" exact component={PersonalInfoPageContainer} />
        <Route path="/" exact component={ProfessionalInfoPageContainer} />
        <Redirect to="/" /> 
      </Switch>
    </div>
  );
}

export default withRouter(App);
