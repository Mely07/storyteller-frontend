import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addStory } from '../../actions/storiesActions'
import TopStory from './TopStory';

class StoryInput extends Component {

    state = {
        opening_line: '',
        image: '',
        genre: '',
        author: this.props.user.username,
        openingLineError: '',
        imageError: '',
        genreError: ''
    }

    handleOnChange = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        let imagePattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

        if (this.state.image === '') {
            this.setState({ imageError: 'image is required' });
        }

        else if (this.state.opening_line === '') {
            this.setState({ imageError: '', genreError: '' });
            this.setState({ openingLineError: 'opening line is required' });
        }

        else if (!imagePattern.test(this.state.image)) {
            this.setState({ openingLineError: '', genreError: '' })
            this.setState({ imageError: 'invalid format' });
        }

        else if (this.state.genre == '') {
            this.setState({ imageError: '', openingLineError: '' })
            this.setState({ genreError: 'genre is required' });
        }
        else {
            this.setState({ openingLineError: '', imageError: '', genreError: '' });
            this.props.addStory(this.state)
            this.setState({
                opening_line: '',
                image: '',
                genre: ''
            })
        }
    }

    render() {
        return (
            <div className="row" style={{ margin: '30px 100px' }}>

                <div className="col-md-6">
                    <TopStory story={this.props.topStory} />
                </div>
                
                <div className="col-md-.5"></div>

                <div className="col-md-5 mt-4">
                    <div>
                        <br />
                        <div>
                            <form>
                                <div className="mb-3">
                                    <label for="image" className="form-label">Image URL:</label>
                                    <input placeholder="Image URL" className="form-control" type="url" value={this.state.image} onChange={this.handleOnChange} id="image" name="image" required />
                                    <small className="form-text text-danger">{this.state.imageError}</small>
                                </div>
                                <div className="mb-3">
                                    <label for="opening_line" className="form-label">Opening Line(s):</label>
                                    <textarea placeholder="Opening line(s) here..." className="form-control" id="opening_line" name="opening_line" value={this.state.opening_line} onChange={this.handleOnChange} rows="3"></textarea>
                                    <small className="form-text text-danger">{this.state.openingLineError}</small>
                                </div>

                                <p>Choose a Genre:</p>

                                <div className="form-check text-secondary" onChange={this.handleOnChange} name="genre">
                                    <input className="form-check-input" type="radio" value="Comedy" name="genre" />
                                    <label className="form-check-label" htmlFor="Comedy">
                                        Comedy
                                    </label>
                                    <br />
                                    <input className="form-check-input" type="radio" value="Horror" name="genre" />
                                    <label className="form-check-label" htmlFor="Horror">
                                        Horror
                                    </label>
                                    <br />
                                    <input className="form-check-input" type="radio" value="Action" name="genre" />
                                    <label className="form-check-label" htmlFor="Action">
                                        Action
                                    </label>
                                    <br />
                                    <input className="form-check-input" type="radio" value="Fantasy" name="genre" />
                                    <label className="form-check-label" htmlFor="genre">
                                        Fantasy
                                    </label>
                                    <small className="form-text text-danger">{this.state.genreError}</small>
                                </div>

                                <button className="btn btn-secondary float-right" onClick={(event) => this.handleOnSubmit(event)}> Add New Story </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { addStory })(StoryInput);

