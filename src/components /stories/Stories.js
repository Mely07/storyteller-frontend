import React from 'react';
import StoryCard from './StoryCard'
import { Link } from 'react-router-dom';
import StoryInput from './StoryInput';

const Stories = ({ stories }) => {
    const renderStories = stories.map(story =>
        <Link key={story.id} to={`/stories/${story.id}`}><StoryCard story={stories.find(s => s.id == story.id)} /></Link>
    );

    return (
        <div>
            <StoryInput />
            {renderStories}
        </div>
    );
};

export default Stories;