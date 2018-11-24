import React, { Component } from 'react';
import './styles.css';
import Comment from '../../components/comment';

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
            grid.push(
                <div>
                <div className="phone-box">
                <div className="phone-img-section">
                    <img alt="phone-name" src={this.state.phones[i].imglink1}/>
                </div>
                <div className="phone-summary-section">
                    <h1>{this.state.phones[i].brand} {this.state.phones[i].name}</h1>
                    <div className="user-rating-summary">
                        <img src={require("../../img/favorite.png")}/>
                        <text><span 
                        className="large-bolder-text">4.5/</span>5</text>
                        <span>  (Average User Rating)</span>
                        <br/>
                        <br/>
                        <div className="details-small-grid">
                        <div className="details-small-grid1">
                            <h3 className="details-small-grid-head">
                            <img src={require("../../img/security-on.png")}/>OS</h3>
                            <p className="details-small-grid-text"> Android</p>
                        </div>
                        <div className="details-small-grid1">
                            <h3 className="details-small-grid-head"><img src={require("../../img/memory-chip.png")}/> Chipset</h3>
                            <p className="details-small-grid-text">A10 Bionic</p>
                        </div>
                        <div className="details-small-grid1">
                            <h3 className="details-small-grid-head"><img src={require("../../img/battery.png")}/> Battery</h3>
                            <p className="details-small-grid-text">4000 mah</p>
                        </div>
                        <div className="details-small-grid1">
                            <h3 className="details-small-grid-head"><img src={require("../../img/smartphone.png")}/> Screen</h3>
                            <p className="details-small-grid-text">6.21"</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    
            <div id="spec_response">
            <div className="sub_inner_box border">
                <h2 className="heading head_bdr">
                OnePlus 6T Specifications
                </h2>
                <div className="spec_box">
                    <div className="specsLeft">
                    General
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Launch Date</td>
                            <td className="spec_des">{this.state.phones[i].announced}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Status</td>
                            <td className="spec_des">{this.state.phones[i].status}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>


                <div className="spec_box">
                    <div className="specsLeft">
                    General
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Launch Date</td>
                            <td className="spec_des">October 11, 2018 (Official)</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Launch Date</td>
                            <td className="spec_des">October 11, 2018 (Official)</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="spec_box">
                    <div className="specsLeft">
                    General
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Launch Date</td>
                            <td className="spec_des">October 11, 2018 (Official)</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Launch Date</td>
                            <td className="spec_des">October 11, 2018 (Official)</td>
                        </tr>
                        </tbody>
                    </table>
                </div>


            </div>
            </div>
            </div>

            );
    return (
        <div className="phone-details">
            {grid}
        <Comment id={this.props.match.params.id}/>
        </div>
    );
  }
}

