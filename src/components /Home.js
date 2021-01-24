import React, { Component } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';


const title= {
        position: "fixed",
        top: "50%",
        left: "50%",
        // marginTop: "-50px",
        // marginLeft: "-100px",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "150px"

  };

class Home extends Component {
    state = {
        renderLogInForm: false,
        renderSignUpForm: false
    }

    componentDidMount() {
        const x = document.getElementsByTagName("body")[0];
        x.style = 'background-image: url("https://www.wrl.org/wp-content/uploads/2020/04/fantasy_science_fiction_book_magic.jpg"); background-size: 100%';
    }

    // https://miro.medium.com/max/10368/1*77kVLXT5wReVAW-kQYcpaw.jpeg

    componentWillUnmount() {
        const x = document.getElementsByTagName("body")[0];
        x.style = '';
    }

    login() {
        this.setState({ renderLogInForm: true, renderSignUpForm: false });
    }

    signup() {
        this.setState({ renderLogInForm: false, renderSignUpForm: true });
    }

    render() {
        return (
            <div>
                <div className="container text-center centered mt-2" style={title}>
                    <h1 className="display-3" style={{fontSize: "120px"}}>Storyteller</h1>
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