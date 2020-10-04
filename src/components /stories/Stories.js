import React, { Component } from 'react';
import StoryCard from './StoryCard'
import {Link} from 'react-router-dom';

const Stories = ({stories}) => {
    const renderStories = stories.map(story =>
        <Link key={story.id} to={`/stories/${story.id}`}><StoryCard story={stories.find(s => s.id == story.id)}/></Link> //{stories[storyID].opening_line}
    );

    return (
        <div>
            {renderStories}
        </div>
    );
};

export default Stories;