import React, { Component } from 'react';
import Comment from './Comment'


class Comments extends Component {
    render() {
        return (
            <div>
                {this.props.comments.map(comment => <p key={comment.id}> <Comment comment={comment} /> </p>)} 
            </div>
        );
    }
}

export default Comments;

