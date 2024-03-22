import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { HiMiniBarsArrowDown } from 'react-icons/hi2';
import { IoIosLogOut, IoMdArrowDropdown } from 'react-icons/io';
import Logo from './Logo';
import './LoggedInNavbar.css';
import { useAuth } from '../contexts/AuthContext';

function LoggedInNavbar() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [showLinks, setShowLinks] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const dropdownRef = useRef(null);

  if (!currentUser) {
    return null;
  }

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setError('Failed to log out');
    }
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div>
            <RouterLink to="/home">
              <Logo />
            </RouterLink>
          </div>
          <button className="nav-toggle" onClick={toggleLinks}>
            <HiMiniBarsArrowDown />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul
            className={`links ${showLinks ? 'show-links' : ''}`}
            ref={linksRef}
          >
            <li>
              <Link
                className="link"
                to="about"
                spy={true}
                smooth="true"
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="services"
                spy={true}
                smooth="true"
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="location"
                spy={true}
                smooth="true"
                duration={500}
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="contacts"
                spy={true}
                smooth="true"
                duration={500}
              >
                Contacts
              </Link>
            </li>
            <li className="dropdown-container">
              <RouterLink
                className="link profile-button"
                onClick={toggleDropdown}
              >
                Profile <IoMdArrowDropdown className="arrow-down" />
              </RouterLink>
              <div
                className={`dropdown-content ${showDropdown ? 'show' : ''}`}
                ref={dropdownRef}
              >
                <p>{currentUser.email}</p>
                <button onClick={handleLogout}>
                  Logout <IoIosLogOut />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LoggedInNavbar;
