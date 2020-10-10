import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
                <h1>Storyteller</h1>
                <p className="lead">An app created for the author in you.</p>
                <button className="btn btn-small btn-light my-2" onClick={() => this.setState({renderForm: true})}> Next </button>
                {this.state.renderForm && <LogIn/>}
            </div>
        </div>
     );
 }
}

export default Home;