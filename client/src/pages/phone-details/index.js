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
            grid.push(<h2>{this.state.phones[i].name}-{this.state.phones[i].id}</h2>);
    return (
        <div className="phone-details">
            <div className="phone-image">
                <div><img alt="phone picture"  src={"https://cdn2.gsmarena.com/vv/pics/oneplus/oneplus-6t-thunder-purple-1.jpg"}/></div>
                <div className="big-text">One Plus 5T
                <div></div>
                </div>
            </div>
            <div className="phone-details-grid">
                <div id="phone-details-col-1">
                    <div className="col-1-content">
                        <div className="details-main">Launch</div>
                        <div className="details-sub">
                            <div>Announced</div>
                            <div> Status</div>
                        </div>
                        <div className="details-sub2">
                            <div className="left-text">October</div>
                            <div className="left-text"> Availabe, Nov 2018</div>
                        </div>
                    </div>

                    <div className="col-1-content">
                        <div className="details-main">Launch</div>
                        <div className="details-sub">
                            <div>Announced</div>
                            <div> Status</div>
                        </div>
                        <div className="details-sub2">
                            <div className="left-text">Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass</div>
                            <div className="left-text"> Availabe, Nov 2018</div>
                        </div>
                    </div>

                    <div className="col-1-content">
                        <div className="details-main">Launch</div>
                        <div className="details-sub">     
                            <div>Announced</div>
                            <div> Status</div>
                        </div>
                        <div className="details-sub2">
                            <div className="left-text">October</div>
                            <div className="left-text"> Availabe, Nov 2018</div>
                        </div>
                    </div>

                    <div className="col-1-content">
                        <div className="details-main">Launch</div>
                        <div className="details-sub">
                            <div>Announced</div>
                            <div> Status</div>
                        </div>
                        <div className="details-sub2">
                            <div className="left-text">October</div>
                            <div className="left-text"> Availabe, Nov 2018</div>
                        </div>
                    </div>

                </div>
                <div id="phone-details-col-2">
                <div className="col-1-content">
                        <div className="details-main">Launch</div>
                        <div className="details-sub">
                            <div>Announced</div>
                            <div> Status</div>
                        </div>
                        <div className="details-sub2">
                            <div className="left-text">October</div>
                            <div className="left-text"> Availabe, Nov 2018</div>
                        </div>
                    </div>

                    <div className="col-1-content">
                        <div className="details-main">Launch</div>
                        <div className="details-sub">
                            <div>Announced</div>
                            <div> Status</div>
                        </div>
                        <div className="details-sub2">
                            <div className="left-text">October</div>
                            <div className="left-text"> Availabe, Nov 2018</div>
                        </div>
                    </div>
                    <div className="col-1-content">
                        <div className="details-main">Launch</div>
                        <div className="details-sub">
                            <div>Announced</div>
                            <div> Status</div>
                        </div>
                        <div className="details-sub2">
                            <div className="left-text">October</div>
                            <div className="left-text"> Availabe, Nov 2018</div>
                        </div>
                    </div>
                 </div>
            </div>
        <Comment id={this.props.match.params.id}/>
        </div>
    );
  }
}

