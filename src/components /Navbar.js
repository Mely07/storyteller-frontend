import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { logout } from '../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/"> ST </Navbar.Brand>

        <Nav className="col-sm-3">
          {this.props.loggedIn ? (
            <>
              <Nav.Link href="/stories">Stories</Nav.Link>
              <Nav.Link href="#" onClick={() => this.props.logout(this.props.history)}>Log Out</Nav.Link>
            </>
          ) : (
              <>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
        </Nav>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default withRouter(connect(mapStateToProps, { logout })(NavBar));