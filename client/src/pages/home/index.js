import React, { Component } from 'react';
import styles from './styles.css';
import { Route, Link } from 'react-router-dom'
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            phones: []
        }
    }

    componentDidMount(){
       fetch('/api/phones/all')
       .then(res => res.json())
       .then(phones => this.setState({phones},() => console.log(phones)));
    }
    render() {
    return (
      <div className="home">
        <div className="main-overlay">
        <h1>PhoneGeeks</h1>
        <input placeholder="Search..." required="required" autofocus="" class="search-bar-landing"/>
        <button id="search-action" class="search-icon-landing">
            <img src={require('../../img/search.png')} />
        </button>
        </div>
        <h1>Featured Phones</h1>
        <div className="featured-phones-grid">
            {this.state.phones.map(phones => 
            <Link key={phones.id} to={"/phones/"+phones.id}><div className="featured-phones-item">
            <img src={phones.img}/>
            <h2>{phones.pbrand} {phones.pname}</h2>
            </div></Link>)}
      </div>
      </div>
    );
  }
}

