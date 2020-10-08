import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCurrentUser } from '../actions/usersActions';
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
    state = {
        username: '',
        email: ''
    }

    OnChange = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })
    }

    OnClick = (e) => {
        e.preventDefault();
        this.props.createCurrentUser(this.state)
    }
    render() {
        return (

            <div className="col-md-6 order-md-1">
                <form className="mt-2 center">
                    <div className="mb-3">
                        <input placeholder="Username" className="form-control" type="text" value={this.state.username} onChange={this.OnChange} name="username" />
                    </div>

                    <div className="mb-3">
                        <input placeholder="Email" className="form-control" type="text" value={this.state.email} onChange={this.OnChange} name="email" />
                    </div>

                    <button className="btn btn-secondary my-2" onClick={(event) => this.OnClick(event)}> Submit </button>
                </form>

                {/* {(this.props.user.username &&  <Redirect to={{pathname:"/stories", state: {users: this.props.user}}} />)}   */}
                {(this.props.user.username && <Redirect to="/stories" />)}
            </div>

        );
    }
};

const mapStateToProps = state => {
    return { user: state.users }
}

export default connect(mapStateToProps, { createCurrentUser })(LogIn);