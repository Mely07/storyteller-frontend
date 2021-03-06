import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseLikes } from '../../actions/commentsActions';
import { increaseDislikes } from '../../actions/commentsActions';
import { increaseFunnyRating } from '../../actions/commentsActions';
import { increaseScaryRating } from '../../actions/commentsActions'

class Comment extends Component {

    handleLike = (e) => {
        e.preventDefault();
        this.props.increaseLikes(this.props.comment.id)
    }

    handleDislike = (e) => {
        e.preventDefault();
        this.props.increaseDislikes(this.props.comment.id)
    }

    handleFunnyClick = (e) => {
        e.preventDefault();
        this.props.increaseFunnyRating(this.props.comment.id)
    }

    handleScaryClick = (e) => {
        e.preventDefault();
        this.props.increaseScaryRating(this.props.comment.id)
    }

    render() {
        return (
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="card-text">{this.props.comment.text}
                        <br></br><br /> 
                        <strong> Posted by:</strong> {this.props.comment.author}
                        <br />
                        <span className="float-right">
                            <i className="far fa-thumbs-up mr-1 text-success" onClick={(e) => this.handleLike(e)}>{this.props.comment.likes}</i>
                            <i className="far fa-thumbs-down mx-1 text-danger" onClick={(e) => this.handleDislike(e)}>{this.props.comment.dislikes}</i>
                            <i className="far fa-grin-squint-tears mx-1 text-primary" onClick={(e) => this.handleFunnyClick(e)}>{this.props.comment.funny_rating}</i>
                            <i className="fas fa-ghost mx-1" onClick={(e) => this.handleScaryClick(e)}>{this.props.comment.scary_rating}</i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { increaseLikes, increaseDislikes, increaseFunnyRating, increaseScaryRating })(Comment);
