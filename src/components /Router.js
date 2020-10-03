import React from 'react';
import {Switch, Route} from 'react-router-dom'
import CommentsContainer from '../containers/CommentsContainer';
import StoriesContainer from '../containers/StoriesContainer';
import Home from './Home';
import Navbar from './Navbar';


const Router = () => {
    return (
        <div>
            <Navbar /> 
            
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/stories' component={StoriesContainer} />
                <Route exact path='/comments' component={CommentsContainer} />
            </Switch>
        </div>
    );
};

export default Router;