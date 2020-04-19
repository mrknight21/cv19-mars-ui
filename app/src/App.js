import React, { Component } from 'react';
import DailySurvey from './components/pages/DailySurvey'
import ThankYouPage from './components/pages/ThankYouPage'
import RegistrationPage from './components/pages/RegistrationPage'
import UserInfoSurvey from './components/pages/UserInfoSurvey'
import { BrowserRouter as Router, Route} from "react-router-dom"; 
import Navbar from './components/Navbar'
import './App.css';

export class App extends Component {

  render () {
      return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={RegistrationPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/userinfo" component={UserInfoSurvey} />
          <Route exact path="/dailysurvey" component={DailySurvey} />
          <Route exact path="/thankyou" component={ThankYouPage} />
        </div>
      </Router>
      );
    }
}

export default App;
