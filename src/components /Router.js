import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import StoriesContainer from '../containers/StoriesContainer';
import Home from './Home';
import NavBar from './Navbar';
import LogIn from './LogIn';
import SignUp from './SignUp'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Router extends Component {

    render() {
        return (
            <div>
                <NavBar />

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/stories' render={routerProps => <StoriesContainer {...routerProps} />} />
                    <Route
                        path="/stories"
                        render={(props) => {
                            if (this.props.loggedIn) {
                                return <StoriesContainer {...props} />;
                            } else {
                                return <Redirect to="/"/>;
                            }
                        }}
                    />
                    <Route path='/login' component={LogIn} />
                    <Route path='/signup' component={SignUp} />

                    {/* <Redirect from="*" to="/" exact/> */}
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
    };
};

export default connect(mapStateToProps, {})(Router);
