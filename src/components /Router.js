import React from 'react';
import {Switch, Route} from 'react-router-dom'
import CommentsContainer from '../containers/CommentsContainer';
import StoriesContainer from '../containers/StoriesContainer';
import Home from './Home';


const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/stories' component={StoriesContainer} />
                <Route exact path='/comments' component={CommentsContainer} />
            </Switch>
        </div>
    );
};

export default Router;