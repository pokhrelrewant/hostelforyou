import React from "react";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark sticky-top  py-0'>
      <a className='navbar-brand py-0' href='/'>
        <img
          src={process.env.PUBLIC_URL + "/CompanyLogo2.svg"}
          height='40'
          width='80'
        />
      </a>
      <ul className='navbar-nav ml-auto py-0'>
        <li className='nav-item topnav-right'>
          <a className='nav-link' href='/'>
            Home
          </a>
        </li>
        <li className='nav-item '>
          <a className='nav-link' href='/form'>
            Search
          </a>
        </li>
        <li className='nav-item '>
          <a className='nav-link' href='/'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
