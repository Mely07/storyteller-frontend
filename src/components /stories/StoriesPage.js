import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Stories from './Stories';
import Story from './Story';
 
const StoriesPage = ({ match, stories }) => (
    <div>
        <Stories stories={stories} /> 
        <Switch>
            <Route exact path={match.url} render={() => <h3>Choose a story from the list above</h3>}/>
            <Route exact path={`${match.url}/:storyId`} render={routerProps => <Story {...routerProps} stories={stories} /> }/>
        </Switch>
    </div>
)
 
export default StoriesPage