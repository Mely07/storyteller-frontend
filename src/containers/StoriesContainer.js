import React, { Component } from 'react';
import { fetchStories } from '../actions/storiesActions'
import { connect } from 'react-redux'
import { Redirect, Switch, Route } from 'react-router-dom'
import Story from '../components /stories/Story';
import Stories from '../components /stories/Stories';


class StoriesContainer extends Component {
    componentDidMount() {
        this.props.fetchStories()
    }

    render() {
        return (
            <div className="container-fluid mb-5">
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

export default connect(mapStateToProps, { fetchStories })(StoriesContainer);

