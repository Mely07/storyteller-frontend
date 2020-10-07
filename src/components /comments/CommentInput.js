import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../../actions/commentsActions'

class CommentInput extends Component {

    state = {
        story_id: this.props.story_id,
        //author: '',
        text: '',
    }

    handleOnChange = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state)
    }

    render() {
        return (
                <form type="text">
                    <input className="card mb-4 shadow-sm" type="text" className="card-text " placeholder="Enter your lines here..." value={this.state.text} onChange={this.handleOnChange} name="text" />
                    <br />
                    <button className="btn btn-secondary my-2" onClick={(e) => this.handleOnSubmit(e)}> Submit </button>
                </form>

        );
    }
}

export default connect(null, { addComment })(CommentInput);

