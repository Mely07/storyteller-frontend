import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div class="jumbotron text-center bg-white">
        <div class="container">
            <h1>Story Teller</h1>
            <p class="lead text-muted">An app created for the author in you.</p>
            <button class="btn btn-secondary my-2"> <Link to="/stories"> Stories </Link></button>
        </div>
    </div>
        );
    }
}

export default Home;