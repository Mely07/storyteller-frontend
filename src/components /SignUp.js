import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/authActions'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',

        usernameError: '',
        emailError: '',
        passwordError: '',
        password_confirmationError: ''
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    OnChange = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })
    }

    OnClick = (e) => {
        e.preventDefault();

        if (this.state.username === '') {
            this.setState({ emailError: '', passwordError: '', password_confirmationError: '' })
            this.setState({ usernameError: 'username is required' });
        }
        else if (this.state.email === '') {
            this.setState({ usernameError: '', passwordError: '', password_confirmationError: '' })
            this.setState({ emailError: 'email is required' });
        }
        else if (!this.validateEmail(this.state.email)) {
            this.setState({ emailError: 'email is invalid' });
        }
        else if (this.state.password === '') {
            this.setState({ usernameError: '', emailError: '', password_confirmationError: '' })
            this.setState({ passwordError: 'password is required' });
        }
        else if (this.state.password_confirmation === '') {
            this.setState({ usernameError: '', emailError: '', passwordError: '' })
            this.setState({ password_confirmationError: 'please confirm password' });
        }
        else {
            this.setState({ usernameError: '', emailError: '', passwordError: '', password_confirmationError: '' })
            this.props.signup(this.state, this.props.history);
        }

    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form className="mt-4">
                        <div className="mb-3">
                            <p className="text-warning">USERNAME</p>
                            <input placeholder="Username" className="form-control" type="text" value={this.state.username} onChange={this.OnChange} name="username" />
                            <small className="form-text bg-white text-danger">{this.state.usernameError}</small>
                            <small className="form-text bg-white text-danger">{this.props.errors && this.props.errors.username}</small>

                        </div>

                        <div className="mb-3">
                            <p className="text-warning">EMAIL</p>
                            <input placeholder="Email" className="form-control" type="email" value={this.state.email} onChange={this.OnChange} name="email" />
                            <small className="form-text bg-white text-danger">{this.state.emailError}</small>
                            <small className="form-text bg-white text-danger">{this.props.errors && this.props.errors.email}</small>
                        </div>

                        <div className="mb-3">
                            <p className="text-warning">PASSWORD</p>
                            <input placeholder="Password" className="form-control" type="password" value={this.state.password} onChange={this.OnChange} name="password" />
                            <small className="form-text bg-white text-danger">{this.state.passwordError}</small>
                            <small className="form-text bg-white text-danger">{this.props.errors && this.props.errors.password}</small>

                        </div>

                        <div className="mb-3">
                            <p className="text-warning">PASSWORD CONFIRMATION</p>
                            <input placeholder="Confirm Password" className="form-control" type="password" value={this.state.password_confirmation} onChange={this.OnChange} name="password_confirmation" />
                            <small className="form-text bg-white text-danger">{this.state.password_confirmationError}</small>
                            <small className="form-text bg-white text-danger">{this.props.errors && this.props.errors.password_confirmation}</small>
                        </div>

                        <button className="btn btn-secondary my-2" onClick={(event) => this.OnClick(event)}> Submit </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state:', state)
    return {
        errors: state.auth.errors
    }
}

export default connect(mapStateToProps, { signup })(SignUp);
