import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addStory } from '../../actions/storiesActions'

class StoryInput extends Component {

    state = {
        opening_line: '',
        image: '',
        genre: '',
        author: localStorage.getItem('user')
    }

    handleOnChange = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })

    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addStory(this.state)
    }

    render() {
        return (
            <div className="col-md-6 order-md-1">
                <form className="mt-2 center">
                    <div className="mb-3">
                        <input placeholder="Opening line here..." className="form-control" type="text" value={this.state.opening_line} onChange={this.handleOnChange} name="opening_line" />
                    </div>

                    <div className="mb-3">
                        <input placeholder="Image URL" className="form-control" type="url" value={this.state.image} onChange={this.handleOnChange} name="image" />
                    </div>

                    <div className="mb-3">
                        <select className="custom-select d-block w-100" value={this.state.genre} onChange={this.handleOnChange} name="genre">
                            <option> -- Select a genre...</option>
                            <option>Comedy</option>
                            <option>Horror</option>
                            <option>Action</option>
                            <option>Fantasy</option>
                        </select>
                    </div>

                    <button className="btn btn-secondary my-2" onClick={(event) => this.handleOnSubmit(event)}> Submit </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.users,
    }
}

export default connect(mapStateToProps, { addStory })(StoryInput);

