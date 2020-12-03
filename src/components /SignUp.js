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

    OnChange = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })
    }

    OnClick = (e) => {
        e.preventDefault();
        this.props.signup(this.state, this.props.history);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form className="mt-4">
                        <div className="mb-3">
                            <input placeholder="Username" className="form-control" type="text" value={this.state.username} onChange={this.OnChange} name="username" />
                        </div>

                        <div className="mb-3">
                            <input placeholder="Email" className="form-control" type="email" value={this.state.email} onChange={this.OnChange} name="email" />
                        </div>

                        <div className="mb-3">
                            <input placeholder="Password" className="form-control" type="text" value={this.state.password} onChange={this.OnChange} name="password" />
                        </div>

                        <div className="mb-3">
                            <input placeholder="Confirm Password" className="form-control" type="text" value={this.state.password_confirmation} onChange={this.OnChange} name="password_confirmation" />
                        </div>

                        <button className="btn btn-secondary my-2" onClick={(event) => this.OnClick(event)}> Submit </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, { signup })(SignUp);