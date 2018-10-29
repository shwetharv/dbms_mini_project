import React, { Component } from 'react';
import './styles.module.css';
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            phones: []
        }
    }

    componentDidMount(){
       fetch('/api/phones/')
       .then(res => res.json())
       .then(phones => this.setState({phones},() => console.log(phones)));
    }
    render() {
    return (
      <div className="home">
        <h1>React app</h1>
        <p> This paragraph is in the home component</p>
        <ul>
            {this.state.phones.map(phones => <li key={phones.id}>{phones.pbrand} {phones.pname}</li>)}
        </ul>
      </div>
    );
  }
}

