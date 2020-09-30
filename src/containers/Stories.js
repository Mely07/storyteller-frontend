import React from 'react';
import {connect} from 'react-redux'

const Stories = ({stories}) => {
    return (
        <div>
            {stories.map((story) => 
                <ul> 
                    <li key={story.id}> 
                        {story.opening_line}
                        {story.genre}
                        {story.author}
                        <img src={story.image} />  
                    </li> 
                </ul>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return { stories: state.stories }
}

export default connect(mapStateToProps)(Stories);

