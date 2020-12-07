import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions'

class LogIn extends Component {
    state = {
        username: '',
        password: '',
        usernameError: '',
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
        else if (this.state.password === '') {
            this.setState({ passwordError: 'Password is required.' });
        }
        else {
            this.props.login(this.state, this.props.history);
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
                        </div>

                        <div className="mb-3">
                            <input placeholder="Password" className="form-control" type="text" value={this.state.password} onChange={this.OnChange} name="password" />
                            <small className="form-text bg-white text-danger">{this.state.passwordError}</small>
                        </div>

                        <button className="btn btn-secondary my-2" onClick={(event) => this.OnClick(event)}> Submit </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { login })(LogIn);