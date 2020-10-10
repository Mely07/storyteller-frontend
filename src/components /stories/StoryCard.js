import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ story }) => {
    return (

        <div className="card rounded">
            <Link key={story.id} to={`/stories/${story.id}`}><img className="card-img-top border border-secondary rounded" style={{height: "280px"}} src={story.image} alt="Card image cap"></img></Link>

            <div className="card-body">
                <p className="font-italic" style={{maxHeight: '4.5rem', overflowY: 'scroll', minHeight: '4.5rem'}}>{story.opening_line}</p>
                <footer className="blockquote-footer">Posted by: <cite title="Source Title">{story.author}</cite></footer>
            </div>
        </div>
    )
}
export default StoryCard;
