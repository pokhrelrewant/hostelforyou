import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Carousel from "./Carousel";
import getPath from "../../actions/getPath";
import "./hostelDetail.css";
import Navbar from "../layout/Navbar";
import retHostel from "../../actions/retHostel";

var count = 0;

const HostelDetail = props => {
  const { hostel, getPath, path, retHostel, loading } = props;

  useEffect(() => {
    if (count++ < 2) {
      if (props.match.path === "/hostel/:id") {
        console.log("hellow");
        retHostel(props.match.params.id);
        return () => {
          console.log("rreewwww");
          if (hostel) getPath(hostel.photos);
          else console.log("firsttime");
        };
      }
    }
  }, [hostel]);

  return (
    <Fragment>
      <Navbar />
      <div>
        {/* Overlay effect when opening sidebar on small screens */}

        {/* !PAGE CONTENT! */}
        <div className='container container-sm containerNirav my-2 my-sm-4'>
          {/* Slideshow Header */}
          {!loading && (
            <div id='demo' className='carousel slide' data-ride='carousel'>
              <h2 className='w3-text-green'>{hostel.name}</h2>
              <h4>{hostel.location}</h4>
              <div>{Carousel(hostel.photos, path)}</div>
            </div>
          )}
          <div className='mt-3 w3-container'>
            <h4>
              <strong>Nearby Institutions</strong>
            </h4>

            <div className='w3-row w3-large'>
              <div className='w3-col s6'>
                <p>Max people: 4</p>
                <p>
                  <i className='fa fa-fw fa-bath' /> Bathrooms: 2
                </p>
                <p>
                  <i className='fa fa-fw fa-bed' /> Bedrooms: 1
                </p>
              </div>
              <div className='w3-col s6'>
                <p>
                  <i className='fa fa-fw fa-clock-o' /> Check In: After 3PM
                </p>
                <p>
                  <i className='fa fa-fw fa-clock-o' /> Check Out: 12PM
                </p>
              </div>
            </div>
            <hr />
            <h4>
              <strong>Amenities</strong>
            </h4>
            <div className='w3-row w3-large'>
              <div className='w3-col s6'>
                <p>
                  <i className='fa fa-fw fa-shower' /> Shower
                </p>
                <p>
                  <i className='fa fa-fw fa-wifi' /> WiFi
                </p>
                <p>
                  <i className='fa fa-fw fa-tv' /> TV
                </p>
              </div>
              <div className='w3-col s6'>
                <p>
                  <i className='fa fa-fw fa-cutlery' /> Kitchen
                </p>
                <p>
                  <i className='fa fa-fw fa-thermometer' /> Heating
                </p>
                <p>
                  <i className='fa fa-fw fa-wheelchair' /> Accessible
                </p>
              </div>
            </div>
            <hr />
            <h4>
              <strong>Extra Info</strong>
            </h4>
            <p>
              Our apartment is really clean and we like to keep it that way.
              Enjoy the lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              We accept: <i className='fa fa-credit-card w3-large' />{" "}
              <i className='fa fa-cc-mastercard w3-large' />{" "}
              <i className='fa fa-cc-amex w3-large' />{" "}
              <i className='fa fa-cc-cc-visa w3-large' />
              <i className='fa fa-cc-paypal w3-large' />
            </p>
            <hr />
            <h4>
              <strong>Rules</strong>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Subscribe to receive updates on available dates and special
              offers.
            </p>
            <p>
              <div>
                <Link to='/book' className='btn btn-primary btn-block'>
                  Book Now
                </Link>
              </div>
            </p>
          </div>
          <hr />
          {/* Contact */}
          <div className='w3-container' id='contact'>
            <h2>Contact</h2>
            <i className='fa fa-map-marker' style={{ width: "30px" }} />{" "}
            Chicago, US
            <br />
            <i className='fa fa-phone' style={{ width: "30px" }} /> Phone: +00
            151515
            <br />
            <i className='fa fa-envelope' style={{ width: "30px" }}>
              {" "}
            </i>{" "}
            Email: mail@mail.com
            <br />
            <p>Questions? Go ahead, ask them:</p>
            {/* End page content */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  hostel: state.retriever.hostel,
  path: state.getPath.path,
  loading: state.getPath.loading
});

export default connect(mapStateToProps, { getPath, retHostel })(HostelDetail);
