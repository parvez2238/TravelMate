import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../NavBar/NavBar.css';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const toggleProfileDropdown = () => {
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>journey<span style={{color:"red"}}>Mate</span> </h1>
        </div>
  
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
  
        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          {/* <Link to="#best-offer">Best Offer</Link>
          <Link to="#contact">Contact</Link> */}
          <div className="profile-icon" onClick={toggleProfileDropdown}>
            <FaUserCircle />
            {isProfileDropdownOpen && (
              <div className="dropdown-menu">
                 <Link to="/update-profile">Update Profile</Link>
                <Link to="#logout">Logout</Link>
              </div>
            )}
          </div>
        </div>
  
        <div className="navbar-hamburger" onClick={toggleMobileMenu}>
          <FaBars />
        </div>
      </nav>
    );
};

export default NavBar;
