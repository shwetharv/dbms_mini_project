import React, { Component } from 'react';
import styles from './styles.css';
export default class PhoneDetails extends Component {
    constructor(){
        super();
        this.state={
            phones: []
        }
    }

    componentDidMount(){
       fetch('/api/phones/'+this.props.match.params.id)
       .then(res => res.json())
       .then(phones => this.setState({phones},() => console.log(phones)));
    }
    render() {
        var grid=[];
        for(var i in this.state.phones)
            grid.push(<h2>{this.state.phones[i].name}-{this.state.phones[i].id}</h2>);
    return (
      <div className="phone-deatils">
        <h1>Phone Details</h1>
        {grid}
      </div>
    );
  }
}