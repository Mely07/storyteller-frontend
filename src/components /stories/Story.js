import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer';

const Story = ({ match, stories }) => {
  if (stories.length === 0) return null
  return (
    <div className="container">
      <div className="text-center">
        <img src={stories.find(s => s.id == match.params.storyId).image} alt={'Story Scene'} className="border border-secondary rounded" style={{maxWidth: '40rem' , border: 'rounded'}} />
      </div>
      <h5 className="font-italic mt-3">{stories.find(s => s.id == match.params.storyId).opening_line}</h5>
      <p className="text-warning">Created by: {stories.find(s => s.id == match.params.storyId).author}</p>
      <CommentsContainer story_id={stories.find(s => s.id == match.params.storyId).id} />
    </div>
  );
};

export default Story;