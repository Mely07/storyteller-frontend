import React, { Component } from 'react';
import {connect} from 'react-redux'
import Story from './Story'

class Stories extends Component {
    render() {
        return (
            <div>
                {this.props.stories.map(story => <li><Story story={story}/></li> )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { stories: state.stories }
}

export default connect(mapStateToProps)(Stories);