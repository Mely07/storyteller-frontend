import React, { Component } from 'react';
import {fetchStories} from '../actions/storiesActions'
import {connect} from 'react-redux'
import StoryInput from '../components /stories/StoryInput';
import StoriesPage from '../components /stories/StoriesPage';
import {Redirect, Switch, Route} from 'react-router-dom'


class StoriesContainer extends Component {

    componentDidMount () {
        this.props.fetchStories() 
    }
    
    render() {
        return (
            <div>
                <StoryInput />

                <Switch>
                    <Route  path='/stories' render={routerProps => <StoriesPage {...routerProps} stories={this.props.stories}/>} />
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

