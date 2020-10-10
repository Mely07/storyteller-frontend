import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand> ST </Navbar.Brand>
      <Nav className="col-sm-3">
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href="/stories">Stories</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;