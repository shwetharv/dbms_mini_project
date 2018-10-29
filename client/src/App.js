import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
