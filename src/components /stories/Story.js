import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer';

class Story extends Component {

  render() {
    const { story } = this.props;
    //const story = this.props.story;

    return (
      <div>
        {story.opening_line} - {story.genre} - {story.id}
        <CommentsContainer story_id={story.id}/> 
      </div>
    );
  }
};


export default Story;
