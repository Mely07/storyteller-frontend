import React, { Component } from 'react';
import StoryInput from './StoryInput';
import Stories from'./Stories'
import {fetchStories} from '../actions/storiesActions'
import {connect} from 'react-redux'

class StoriesContainer extends Component {

    componentDidMount () {
        this.props.fetchStories() 
    }
    
    render() {
        return (
            <div>
                <StoryInput/>
                <Stories />
            </div>
        );
    }
}

export default connect(null, { fetchStories })(StoriesContainer); 

