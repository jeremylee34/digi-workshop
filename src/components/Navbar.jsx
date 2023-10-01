import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/background">Background</Link>
        </li>
        <li>
          <Link to="/facts">Facts</Link>
        </li>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
