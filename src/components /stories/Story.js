import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer';

class Story extends Component {

  render() {
    const { story } = this.props;
    //const story = this.props.story;

    return (

      <div>
          <li>
            {story.opening_line}
            <CommentsContainer />
          </li>
      </div>
    );
  }
};

export default Story;
