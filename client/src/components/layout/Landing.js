import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      <div class='cover-container d-flex h-100 p-3 mx-auto flex-column'>
        <header class='masthead mb-auto'>
          <div class='inner'>
            <h3 class='masthead-brand'>Hostel</h3>
            <nav class='nav nav-masthead justify-content-center'>
              <Link className='nav-link active' to='/'>
                Home
              </Link>
              <Link className='nav-link' to='/search'>
                Search
              </Link>
              <Link className='nav-link' to='/form'>
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main role='main' class='inner cover'>
          <h1 class='cover-heading'>Find your Hostel room.</h1>
          <p class='lead'>
            Hostel is an app for searching your best hostel and book online at a
            reasonable price.{" "}
          </p>
          <p class='lead'>
            <Link to='/search' class='btn btn-lg btn-secondary'>
              Search Now
            </Link>
          </p>
        </main>

        <footer class='mastfoot mt-auto'>
          <div class='inner'>
            <p>
              Copyright <a href='#'>@hostel</a>.
            </p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Landing;
