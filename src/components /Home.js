import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import LogIn from './LogIn';

class Home extends Component {
 state = { 
     renderForm: false 
 }

//call onchange handler map to method, that will dispatch an action/reducer to store username/email in redux store 
    
    render() {
        return (
            <div className="jumbotron text-center bg-white">
        <div className="container">
            <h1>Story Teller</h1>
            <p className="lead text-muted">An app created for the author in you.</p>
            <button className="btn btn-primary  my-2" onClick={() => this.setState({renderForm: true})}> Next </button>
            {this.state.renderForm && <LogIn/>}
            
            
        </div>
    </div>
        );
    }
}

export default Home;