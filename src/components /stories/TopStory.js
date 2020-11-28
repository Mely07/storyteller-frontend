import React from 'react';
import { Link } from 'react-router-dom';

const TopStory = (story) => {
    story = story.story
    
    if (!story) return null
    
    return (
        <div>
            <p className="text-secondary font-weight-bold text-warning">Trending Story:</p>
            <div className="card rounded">
                <Link key={story.id} to={`/stories/${story.id}`}><img className="card-img-top border border-secondary rounded" src={story.image} alt="Card image cap"></img></Link>

                <div className="card-body">
                    <p className="font-italic" style={{ maxHeight: '4.5rem', overflowY: 'scroll', minHeight: '4.5rem' }}>{story.opening_line}</p>
                    <footer className="blockquote-footer">Posted by: <cite title="Source Title">{story.author}</cite></footer>
                </div>
            </div>
        </div>
    );
};

export default TopStory;