import React, { Component } from 'react';
import StoryCard from './StoryCard'
import {Link} from 'react-router-dom';

const Stories = ({stories}) => {
    const renderStories = Object.keys(stories).map(storyId =>
        <Link key={storyId} to={`/stories/${storyId}`}><StoryCard story={stories[storyId]}/></Link> //{stories[storyID].opening_line}
    );

    return (
        <div>
            {renderStories}
        </div>
    );
};

export default Stories;