import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/authActions'

class SignUp extends Component {
    state = {
        username: '',
        email: '',        
        password:'',
        password_confirmation: ''
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
            this.setState({ usernameError: 'Username is required.' });
        }
        else if (this.state.email === '') {
            this.setState({ emailError: 'Email is required.' });
        }
        else if (!this.validateEmail(this.state.email)) {
            this.setState({emailError: 'Email is invalid.'});
        }
        else if (this.state.password === '') {
            this.setState({ passwordError: 'Password is required.' });
        }
        else if (this.state.password_confirmation === '') {
            this.setState({ password_confirmationError: 'Please Confirm Password.' });
        }
        else {
            this.props.signup(this.state, this.props.history);
        }
    }

    render() {

        return (
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form className="mt-4">
                        <div className="mb-3">
                            <input placeholder="Username" className="form-control" type="text" value={this.state.username} onChange={this.OnChange} name="username" />
                            <small className="form-text bg-white text-danger">{this.state.usernameError}</small>
                            <small className="form-text bg-white text-danger">{ this.props.errors && (<p>Username {this.props.errors.username}.</p>)}</small>
                        </div>

                        <div className="mb-3">
                            <input placeholder="Email" className="form-control" type="email" value={this.state.email} onChange={this.OnChange} name="email" />
                            <small className="form-text bg-white text-danger">{this.state.emailError}</small>
                            <small className="form-text bg-white text-danger">{ this.props.errors && (<p>Email {this.props.errors.email}.</p>)}</small>
                        </div>

                        <div className="mb-3">
                            <input placeholder="Password" className="form-control" type="text" value={this.state.password} onChange={this.OnChange} name="password" />
                            <small className="form-text bg-white text-danger">{this.state.passwordError}</small>
                            <small className="form-text bg-white text-danger">{ this.props.errors && (<p>Password {this.props.errors.password}.</p>)}</small>
                     </div>

                        <div className="mb-3">
                            <input placeholder="Confirm Password" className="form-control" type="text" value={this.state.password_confirmation} onChange={this.OnChange} name="password_confirmation" />
                            <small className="form-text bg-white text-danger">{this.state.password_confirmationError}</small>
                            <small className="form-text bg-white text-danger">{ this.props.errors && (<p>Password Confirmation {this.props.errors.password_confirmation}.</p>)}</small>
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
