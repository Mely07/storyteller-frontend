import React, { Component } from 'react';
import Comment from './Comment'
import {connect} from 'react-redux'

class Comments extends Component {
    render() {
        return (
            <div>
                {this.props.comments.filter(comment => comment.story_id === this.props.story_id).map(comment => <Comment comment={comment} />)} 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { comments: state.comments }
}

export default connect(mapStateToProps)(Comments);