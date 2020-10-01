import React, { Component } from 'react';
import Comment from './Comment'
import {connect} from 'react-redux'

class Comments extends Component {
    render() {
        return (
            <ul>
                {this.props.comments.map(comment => <li key={comment.id}> <Comment comment={comment} /> </li>)} 

            </ul>
        );
    }
}

const mapStateToProps = state => {
    return { comments: state.comments }
}

export default connect(mapStateToProps)(Comments);