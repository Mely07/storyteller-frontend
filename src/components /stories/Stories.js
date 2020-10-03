import React, { Component } from 'react';
import {connect} from 'react-redux'
import StoryCard from './StoryCard'

class Stories extends Component {
    render() {
        return (
            <ul>
                {this.props.stories.map(story => <li key={story.id}><StoryCard story={story}/></li> )}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return { stories: state.stories }
}

export default connect(mapStateToProps)(Stories);