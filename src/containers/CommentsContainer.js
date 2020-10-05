import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchComments } from '../actions/commentsActions'
import CommentInput from '../components /comments/CommentInput';
import Comments from '../components /comments/Comments';

class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
                <Comments comments={this.props.comments.filter(comment => comment.story_id == this.props.story_id)} />
                <CommentInput story_id={this.props.story_id} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { comments: state.comments }
}

export default connect(mapStateToProps, { fetchComments })(CommentsContainer)

