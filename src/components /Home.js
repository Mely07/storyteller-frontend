import React, { Component } from 'react';
import LogIn from './LogIn';

class Home extends Component {
 state = { 
     renderForm: false 
 }

 componentDidMount() {
    const x = document.getElementsByTagName("body")[0];
    x.style = 'background-image: url("https://miro.medium.com/max/10368/1*77kVLXT5wReVAW-kQYcpaw.jpeg"); background-size: 100%';
 }

 componentWillUnmount() {
    const x = document.getElementsByTagName("body")[0];
    x.style = '';
 }

 render() {
     return (
        <div>
            <div className="container text-center text-white mt-2">
                <h1 className="display-3 ">Storyteller</h1>
                <h5>An app created for the author in you.<button className="btn btn-small btn-link mt-0 text-warning" onClick={() => this.setState({renderForm: true})}> LogIn </button>to start writing</h5>
                {/* <li><h4 onClick={() => this.setState({renderForm: true})}>LogIn </h4></li> */}
                {this.state.renderForm && <LogIn/>}
            </div>
        </div>
     );
 }
}

export default Home;