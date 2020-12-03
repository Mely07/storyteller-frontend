import React, { Component } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

class Home extends Component {
 state = { 
    renderLogInForm: false, 
    renderSignUpForm: false
 }

 componentDidMount() {
    const x = document.getElementsByTagName("body")[0];
    x.style = 'background-image: url("https://miro.medium.com/max/10368/1*77kVLXT5wReVAW-kQYcpaw.jpeg"); background-size: 100%';
 }

 componentWillUnmount() {
    const x = document.getElementsByTagName("body")[0];
    x.style = '';
 }

 login() {
    this.setState({renderLogInForm: true, renderSignUpForm: false});
 }

 signup() {
    this.setState({renderLogInForm: false, renderSignUpForm: true});
 }

 render() {
     return (
        <div>
            <div className="container text-center text-white mt-2">
                <h1 className="display-3 ">Storyteller</h1>
                <button className="btn btn-small btn-link mt-0 text-warning" onClick={() => this.login()}> LogIn </button>
                {/* <li><h4 onClick={() => this.setState({renderForm: true})}>LogIn </h4></li> */}
                {this.state.renderLogInForm && <LogIn history={this.props.history} />}
                <button className="btn btn-small btn-link mt-0 text-warning" onClick={() => this.signup()}> Sign Up</button>
                {this.state.renderSignUpForm && <SignUp history={this.props.history} />}
            </div>
        </div>
     );
 }
}

export default Home;