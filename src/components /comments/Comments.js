import React, { Component } from 'react';
import Comment from './Comment'

class Comments extends Component {
    render() {
        return (
            <div>
                {this.props.comments.map(comment => <Comment comment={comment} />)} 
            </div>
        );
    }
}

//connect ; mapStateToProps

export default Comments;