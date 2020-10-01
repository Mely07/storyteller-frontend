import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addStory } from '../actions/storiesActions'

class StoryInput extends Component {
    
    state = {
        opening_line: '',
        image: '',
        genre: '',
       // author:
    }

    handleOnChange = (e) => {
        let name = e.target.name
        this.setState({[name]: e.target.value})
    }

    handleOnSubmit = (e) => {
        console.log('click')
        e.preventDefault();
        this.props.addStory(this.state)
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <label>Opening Line:</label>
                <input type="text" value={this.state.opening_line} onChange={this.handleOnChange} name="opening_line"/>
                <br />
                <label>Image:</label>
                <input type="url" value={this.state.text} onChange={this.handleOnChange} name="image"/>
                <br />
                <label>Genre:</label>
                <select value={this.state.genre} onChange={this.handleOnChange} name="genre">
                    <option>Comedy</option>
                    <option>Horror</option>
                    <option>Action</option>
                    <option>Fantasy</option>
                </select>
                <br />
                {/* <input type="text" value={this.state.author} onChange={this.handleOnChange} name="author"/>
                <br /> */}
                <input type="submit"/>
            </form>
        );
    }
}

export default connect(null, { addStory})(StoryInput);