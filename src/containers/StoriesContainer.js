import React, { Component } from 'react';
import {fetchStories} from '../actions/storiesActions'
import {connect} from 'react-redux'
import StoryInput from '../components /stories/StoryInput';
import {Redirect, Switch, Route} from 'react-router-dom'
import Story from '../components /stories/Story';
import Stories from '../components /stories/Stories';


class StoriesContainer extends Component {
    componentDidMount () {
        // Refresh error? This is not called when going directy to a story (EX: http://localhost:3003/stories/1)
        this.props.fetchStories() 
    }

    render() {
        return (
            <div>
                <StoryInput />

                <Switch>
                    <Route exact path={`${this.props.match.url}/:storyId`} render={routerProps => <Story {...routerProps} stories={this.props.stories} /> }/>
                    <Route path='/stories' render={routerProps => <Stories stories={this.props.stories} /> } />
                    <Redirect from="*" to="/index.html" />
                </Switch>
            </div>
        ); 
    }
}

const mapStateToProps = state => {
    return { stories: state.stories }
}

export default connect(mapStateToProps, { fetchStories })(StoriesContainer); 

