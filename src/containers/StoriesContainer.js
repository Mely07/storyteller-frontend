import React, { Component } from 'react';
import {fetchStories} from '../actions/storiesActions'
import {connect} from 'react-redux'
import StoryInput from '../components /stories/StoryInput';
import Stories from '../components /stories/Stories';

class StoriesContainer extends Component {

    componentDidMount () {
        this.props.fetchStories() 
    }
    
    render() {
        return (
            <div>
                <StoryInput />
                <Stories />
            </div>
        );
    }
}

export default connect(null, { fetchStories })(StoriesContainer); 

