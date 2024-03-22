import React from 'react';
import './Navbar.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div>
          <Link to="/login">
            <button className="btn">sign in</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
