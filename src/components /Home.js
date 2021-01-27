import React, { Component } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const center = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

class Home extends Component {
    state = {
        renderLogInForm: false,
        renderSignUpForm: false,
        showLoginButton: true,
        showSignUpButton: true
    }

    componentDidMount() {
        const x = document.getElementsByTagName("body")[0];
        x.classList.add('img-fluid')
        x.style = 'background-image: url("https://www.wrl.org/wp-content/uploads/2020/04/fantasy_science_fiction_book_magic.jpg"); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;'
    }

    componentWillUnmount() {
        const x = document.getElementsByTagName("body")[0];
        x.style = '';
    }

    login() {
        this.setState({ renderLogInForm: true, renderSignUpForm: false, showLoginButton: false });
    }

    signup() {
        this.setState({ renderLogInForm: false, renderSignUpForm: true, showSignUpButton: false });
    }

    render() {

        return (
            <div className="text-center" style={center}>
                <div >
                    <h1 style={{ fontSize: "10vw", color: "white" }}>Storyteller</h1>

                    {this.props.loggedIn ? (
                        <>
                            <div>
                                <button className="btn btn-warning mr-3" onClick={() => this.props.history.goBack()}>BACK TO STORIES</button>
                            </div>
                        </>
                    ) : (
                            <>
                                <div>
                                    {this.state.renderLogInForm && <LogIn history={this.props.history} />}
                                    {this.state.renderSignUpForm && <SignUp history={this.props.history} />}

                                    {this.state.showLoginButton && <button className="btn btn-warning mr-3" onClick={() => this.login()}> LogIn </button>}
                                    {this.state.showSignUpButton && <button className="btn btn-warning" onClick={() => this.signup()}> Sign Up</button>}
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
    };
};

export default connect(mapStateToProps)(Home);