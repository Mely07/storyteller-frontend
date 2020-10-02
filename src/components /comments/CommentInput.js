import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addComment } from '../../actions/commentsActions'

class CommentInput extends Component {
    
    state = {
        story_id: this.props.story_id,
        //author: '',
        text: '',
    }

    handleOnChange = (e) => {
        let name = e.target.name
        this.setState({[name]: e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state)
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleOnSubmit(e)}> 
                <label>Text:</label>
                <input type="text" value={this.state.text} onChange={this.handleOnChange} name="text"/>
                <br />
                <input type="submit"/>
            </form>
        );
    }
}

export default connect(null, { addComment})(CommentInput);
