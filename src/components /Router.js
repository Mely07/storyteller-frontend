import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import StoriesContainer from '../containers/StoriesContainer';
import Home from './Home';
import NavBar from './Navbar';
import LogIn from './LogIn';
import SignUp from './SignUp'
import { checkLoggedIn } from '../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Router extends Component {
state = {
    loading: true,
};

toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
};

componentDidMount = () => {
    console.log(this.props);
    this.props.checkLoggedIn(this.toggleLoading);
}

    render() {
        if (this.state.loading) return <h1>Loading...</h1>;
        return (
            <div>
            <NavBar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/stories' render={routerProps => <StoriesContainer {...routerProps} />} />
                <Route path='/login' component={LogIn} />
                <Route path='/signup' component={SignUp} />

                <Redirect from="*" to="/" />
            </Switch>
        </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
      loggedIn: state.auth.loggedIn,
    };
  };

  
  export default connect(mapStateToProps, { checkLoggedIn })(Router);