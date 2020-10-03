import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    //styling 
}  

const Navbar = () => {
    return (
    <div className="navbar">
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
           color: 'red'
          }}
        >Home</NavLink>

        <NavLink
          to="/stories"
          exact
          style={link}
          activeStyle={{
            color: 'red'
          }}
        >Stories</NavLink>
    </div>
    );
};

export default Navbar;

