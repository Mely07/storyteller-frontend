import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom'
import StoriesContainer from '../containers/StoriesContainer';
import Home from './Home';
import NavBar from './Navbar';
import LogIn from './LogIn';
import SignUp from './SignUp'


const Router = () => {
    return (
        <div>
            <NavBar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/stories' render={routerProps => <StoriesContainer {...routerProps} />} />
                <Route path='/login' component={LogIn} />
                <Route path='/signup' component={SignUp} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    );
};

export default Router;