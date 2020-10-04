import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer';

const Story = ({match, stories}) => {

  return (
    <div>
      <h3>{ stories[match.params.storyId].opening_line}</h3>
      <CommentsContainer story_id={stories[match.params.storyId].id} />
    </div>
  );
};

export default Story;