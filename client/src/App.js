import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import PhoneDetails from './pages/phone-details';
import SignUp from './pages/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/phones/:id" exact component={PhoneDetails}/>
            <Route path="/signup" exact component={SignUp}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
