import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchComments} from '../actions/commentsActions'
import Comments from '../components /comments/Comments';

class CommentsContainer extends Component {
    
    componentDidMount () {
        this.props.fetchComments() 
    }

    render() {
        return (
            <div>
                <Comments /> 
            </div>
        );
    }
}

export default connect(null, { fetchComments })(CommentsContainer); 
