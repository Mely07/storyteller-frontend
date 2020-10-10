import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCurrentUser } from '../actions/usersActions';
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
    state = {
        username: '',
        email: '',
        emailError: false, 
        usernameError: '',
    }

    OnChange = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    OnClick = (e) => {
        e.preventDefault();

        if (this.state.username === '') {
            this.setState({usernameError: 'Username is required.'});
        }
        else if (this.state.email === ''){
            this.setState({emailError: 'Email is required.'});
        } 
        else if (!this.validateEmail(this.state.email)) {
            this.setState({emailError: 'Email is invalid.'});
        }
        else {
            this.setState({emailError: '', usernameError: ''});
            localStorage.setItem('user', this.state.username);
            this.props.createCurrentUser(this.state) 
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
                            <input placeholder="Email" className="form-control" type="email" value={this.state.email} onChange={this.OnChange} name="email" />
                            <small className="form-text bg-white text-danger">{this.state.emailError}</small>
                        </div>

                        <button className="btn btn-secondary my-2" onClick={(event) => this.OnClick(event)}> Submit </button>
                    </form>

                    {(this.props.user.username && <Redirect to="/stories" />)}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return { user: state.users }
}

export default connect(mapStateToProps, { createCurrentUser })(LogIn);