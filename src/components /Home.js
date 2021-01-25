import React, { Component } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

const center = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

class Home extends Component {
    state = {
        renderLogInForm: false,
        renderSignUpForm: false
    }

    componentDidMount() {
        const x = document.getElementsByTagName("body")[0];
        x.style = 'background-image: url("https://www.wrl.org/wp-content/uploads/2020/04/fantasy_science_fiction_book_magic.jpg"); background-size: 100%';
    }

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
            <div className="text-center" style={center}>
                <div >
                    <h1 style={{ fontSize: "150px", color: "white" }}>Storyteller</h1>

                    {this.state.renderLogInForm && <LogIn history={this.props.history} />}
                    <div>
                        <button className="btn btn-warning mr-3" onClick={() => this.login()}> LogIn </button>
                        <button className="btn btn-warning" onClick={() => this.signup()}> Sign Up</button>
                    </div>

                    {this.state.renderSignUpForm && <SignUp history={this.props.history} />}

                </div>
            </div>
        );
    }

}
export default Home;