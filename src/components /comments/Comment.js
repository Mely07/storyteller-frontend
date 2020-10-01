import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
                text: {this.props.comment.text}
            <br></br>                
                story_id: {this.props.comment.story_id}
            </div>
        );
    }
}

export default Comment;

