import React, { Component } from 'react';
import { fetchStories, filterByGenre } from '../actions/storiesActions'
import { connect } from 'react-redux'
import { Redirect, Switch, Route } from 'react-router-dom'
import Story from '../components /stories/Story';
import Stories from '../components /stories/Stories';

class StoriesContainer extends Component {
    componentDidMount() {
        this.props.fetchStories()
    }

    handleOnChange = (e) => {
        let genre = e.target.value
        this.props.filterByGenre(genre)
    }

    render() {
        // console.log(this.props.location.state.users.username) 
        return (
            <div>
                Welcome, <p>{this.props.user}</p>

                Filter By Genre:
                <div className="mb-3">
                    <select className="custom-select d-block w-100" onChange={this.handleOnChange}>
                        <option> -- Select a genre...</option>
                        <option>Comedy</option>
                        <option>Horror</option>
                        <option>Action</option>
                        <option>Fantasy</option>
                    </select>
                </div>

                <Switch>
                    <Route exact path={`${this.props.match.url}/:storyId`} render={routerProps => <Story {...routerProps} stories={this.props.stories} />} />
                    <Route path="/stories" render={routerProps => <Stories stories={this.props.stories} user={this.props.user} />} />
                    <Redirect from="*" to="/index.html" />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stories: state.stories,
        user: localStorage.getItem('user'),
    }
}

export default connect(mapStateToProps, { fetchStories, filterByGenre })(StoriesContainer);

