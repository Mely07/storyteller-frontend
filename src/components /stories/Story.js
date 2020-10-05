import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer';

// Need to convert to class?... check if stories is null/empty, if so, then load story from web service using the storyId passed in

const Story = ({match, stories}) => {
  return (
    <div className="container">
      <h3>{ stories.find(s => s.id == match.params.storyId).opening_line}</h3>
      <img src={ stories.find(s => s.id == match.params.storyId).image} alt={'Story Scene'}/>
      <CommentsContainer story_id={stories.find(s => s.id == match.params.storyId).id} />
    </div>
  );
};

export default Story;