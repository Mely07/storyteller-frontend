import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseLikes } from '../../actions/commentsActions'

class Comment extends Component {

    handleLike = (e) => {
        e.preventDefault();
        this.props.increaseLikes(this.props.comment.id)
    }

    render() {
        return (
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="card-text">text: {this.props.comment.text}
                        <br></br>
                story_id: {this.props.comment.story_id}
                        <br></br>
                comment_id: {this.props.comment.id}
                        <br></br>
                        <span>
                            <i className="far fa-thumbs-up" onClick={(e) => this.handleLike(e)}>{this.props.comment.likes}</i>
                            <i className="far fa-thumbs-down" onClick={() => console.log('thumbs down')} >{this.props.comment.dislikes * 2}</i>
                            <i className="far fa-grin-squint-tears" onClick={() => console.log('funny')}>{this.props.comment.funny_rating * 2}</i>
                            <i className="far fa-flushed" onClick={() => console.log('scary')}>{this.props.comment.scary_rating * 2}</i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { increaseLikes })(Comment);
