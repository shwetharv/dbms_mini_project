import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import PhoneDetails from './pages/phone-details';
import SignUp from './pages/signup';
import Login from './pages/login';
import Addphones from './pages/addphones';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/phones/:id" exact component={PhoneDetails}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/addphones" exact component = {Addphones}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
