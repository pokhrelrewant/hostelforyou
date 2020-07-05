import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light sticky-top py-2 px-5 '>
      <a className='navbar-brand py-0' href='/'>
        <img
          src='/output-onlinepngtools.png'
          height='50px'
          alt='logo'
          style={{ display: "block", margin: "0 auto" }}
        />
      </a>
      <ul className='navbar-nav ml-auto py-0'>
        <li className='nav-item topnav-right'>
          <a className='nav-link' href='/'>
            Home
          </a>
        </li>
        <li className='nav-item '>
          <a className='nav-link' href='/search'>
            Search
          </a>
        </li>
        <li className='nav-item '>
          <a className='nav-link' href='/contact'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
