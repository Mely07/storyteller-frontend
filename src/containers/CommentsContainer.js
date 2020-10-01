import React, { Component } from 'react';
import Comments from '../components /comments/Comments';

class CommentsContainer extends Component {

    //fetchComments -> Action, Reducer 

    render() {
        return (
            <div>
                <Comments />
            </div>
        );
    }
}

export default CommentsContainer;