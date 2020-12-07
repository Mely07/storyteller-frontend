import React, { Component } from 'react';
import { fetchStories } from '../actions/storiesActions';
import { fetchTopStory } from '../actions/storiesActions';
import { connect } from 'react-redux'
import { Redirect, Switch, Route } from 'react-router-dom'
import Story from '../components /stories/Story';
import Stories from '../components /stories/Stories';
import { Nav } from 'react-bootstrap';
import { checkLoggedIn } from '../actions/authActions';

class StoriesContainer extends Component {
    state = {
        loading: true,
    };

    toggleLoading = () => {
        this.setState({ loading: !this.state.loading });
    };

    componentDidMount() {
        console.log('in StoriesContainer')
        this.props.fetchStories();
        this.props.fetchTopStory();
        this.props.checkLoggedIn(this.toggleLoading)
    }

    render() {
        if (this.state.loading) return <h1>Loading...</h1>;

        return (
            <div className="container-fluid mb-5">
                { !this.props.user && <div className="container text-center mt-5"><h1 className="display-3">Uh Oh!</h1><br />
                    <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwzEeEPDRTGkqFkK82j8_f6aFLvJnpZpy3rw&usqp=CAU" alt="Open book in dim lighting"></img>
                    <h5>Please LogIn to access stories! </h5><h3><Nav.Link href='/'> Back</Nav.Link></h3></div>}
                { this.props.user && (
                    <div>
                        <h4 className="mt-2">Welcome, <strong><span>{this.props.user.username}</span></strong>!</h4>
                        <Switch>
                            <Route exact path={`${this.props.match.url}/:story_id`} render={routerProps => <Story {...routerProps} stories={this.props.stories.stories} />} />
                            <Route path="/stories" render={routerProps => <Stories stories={this.props.stories.stories} user={this.props.user} topStory={this.props.topStory} />} />
                            <Redirect from="*" to="/index.html" />
                        </Switch>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        topStory: state.stories.story,
        stories: state.stories,
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { fetchStories, fetchTopStory, checkLoggedIn })(StoriesContainer);
// connect(), allows us to specify which data we are listening to (through mapStateToProps)



