import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../../actions/commentsActions'

class CommentInput extends Component {

    state = {
        story_id: this.props.story_id,
        author: localStorage.getItem('user'),
        text: '',
        textError: ''
    }

    handleOnChange = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.setState({ textError: 'Some text is required.' });
        }
        else {
            this.props.addComment(this.state)
            this.setState({
                text: ''
            })
        }
    }

    render() {

        return (
            <form>
                <textarea class="form-control shadow-sm" rows="3" placeholder="Enter your lines here..." value={this.state.text} onChange={this.handleOnChange} name="text"></textarea>
                <small className="form-text text-danger">{this.state.textError}</small>
                <br />
                <button className="btn btn-secondary my-2" onClick={(e) => this.handleOnSubmit(e)}> Submit </button>
            </form>

        );
    }
}

export default connect(null, { addComment })(CommentInput);
