import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Landing1.css";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />

      <img src='pablo-welcome.jpg' className='mainimg' alt='welcome' />
      <div className='landing'>
        <main role='main' className='inner cover '>
          <h1 className='cover-heading'>Find your Hostel room.</h1>
          <p className='lead'>
            Hostel is an app for searching your best hostel and book online at a
            reasonable price.{" "}
          </p>
          <p className='lead'>
            <Link to='/search' className='btn btn-lg btn-success'>
              Search Now
            </Link>
          </p>
        </main>

        <footer className='mastfoot mt-auto'></footer>
      </div>
    </Fragment>
  );
};

export default Landing;
