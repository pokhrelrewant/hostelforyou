import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light sticky-top py-2 px-5 '>
      <Link className='navbar-brand py-0' to='/'>
        <img
          src='/output-onlinepngtools.png'
          height='50px'
          alt='logo'
          style={{ display: "block", margin: "0 auto" }}
        />
      </Link>
      <ul className='navbar-nav ml-auto py-0'>
        <li className='nav-item topnav-right'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item '>
          <Link className='nav-link' to='/search'>
            Search
          </Link>
        </li>
        <li className='nav-item '>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
