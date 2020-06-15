import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Carousel from "./Carousel";
import getPath from "../../actions/getPath";
import "./hostelDetail.css";
import Navbar from "../layout/Navbar";
import retHostel from "../../actions/retHostel";

const HostelDetail = ({ match, hostel, getPath, path, retHostel }) => {
  let [features, setFeatures] = useState({});
  let [feeItems, setFeeItems] = useState([]);
  let [availableSeating, setAvailableSeating] = useState([]);

  useEffect(() => {
    if (match.path === "/hostel/:slug") retHostel(match.params.slug);
  }, [match, retHostel]);

  useEffect(() => {
    //Converting notableFeatures to a convinient form
    //which should have been done serverside
    if (hostel) {
      let featureArray = {};
      let F = hostel.hostelFeatures[0]?.notableFeatures;
      let fE = (s) =>
        F.find((f) => f.toLowerCase().trim() === s.toLowerCase()) ?? false;
      ["free wifi", "24 hours electricity", "running water"].forEach(
        (f) => (featureArray[f] = fE(f) ? true : false)
      );
      setFeatures(featureArray);

      let i = 0;
      let items = [];
      for (let f in hostel.fee.monthly[0]) {
        if (f === "_id") continue;
        items.push(
          <li key={i++}>
            <strong>{f}</strong> : {hostel.fee.monthly[0][f]}
          </li>
        );
      }
      setFeeItems(items);

      let seatingItems = [];
      for (let f in hostel.availableSeating[0]) {
        if (f === "_id") continue;
        seatingItems.push(
          <li key={i++}>
            <strong>{f}</strong> : {hostel.availableSeating[0][f]}
          </li>
        );
      }
      setAvailableSeating(seatingItems);
    }
  }, [hostel, setFeatures, setFeeItems, setAvailableSeating]);

  let i = 1;
  return (
    <Fragment>
      <Navbar />
      <div>
        <div className='container container-sm containerNirav my-2 my-sm-4'>
          <div id='demo' className='carousel slide' data-ride='carousel'>
            <h2 className='w3-text-green'>{hostel && hostel.name}</h2>
            <h4>{hostel && hostel.location}</h4>
            <div>
              {hostel && (
                <Carousel
                  imgFolder={hostel.photos}
                  images={hostel.photosPath}
                />
              )}
            </div>
          </div>

          <div className='mt-3 w3-container'>
            <h4>
              <strong>Nearby Institutions</strong>
            </h4>
            <div className='w3-row w3-large'>
              <ul>
                {hostel &&
                  hostel.nearbyInstitutions.map((item) => (
                    <li key={i++}>{item}</li>
                  ))}
              </ul>
            </div>

            <h4>
              <strong>Amenities</strong>
            </h4>
            <div className='w3-row w3-large'>
              <ul>
                {features["running water"] && (
                  <li>
                    <i className='fa fa-fw fa-shower' />
                    Shower
                  </li>
                )}
                {features["free wifi"] && (
                  <li>
                    <i className='fa fa-fw fa-wifi' /> WiFi
                  </li>
                )}
                {features["24 hours electricity"] && (
                  <li>
                    <i className='fa fa-fw fa-tv' /> 24 Hour Electricity
                  </li>
                )}
                {features["kitchen"] && (
                  <li>
                    <i className='fa fa-fw fa-cutlery' /> Kitchen
                  </li>
                )}
                {features["heating"] && (
                  <li>
                    <i className='fa fa-fw fa-thermometer' /> Heating
                  </li>
                )}
                {features["accessible"] && (
                  <li>
                    <i className='fa fa-fw fa-wheelchair' /> Accessible
                  </li>
                )}
              </ul>
            </div>
            <hr />

            {hostel &&
              hostel.hostelFeatures[0].furnitureAndClothing.length > 0 && (
                <div className='w3-row w3-large'>
                  <h4>Furniture and Clothing</h4>
                  <ul>
                    {hostel &&
                      hostel.hostelFeatures[0].furnitureAndClothing.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                  </ul>
                  <hr />
                </div>
              )}

            <div className='w3-row w3-large'>
              <h4>
                <strong>Pricing</strong>
              </h4>
              <ul>
                <li>
                  <strong>Admission: </strong>
                  {hostel && "Rs. " + hostel.fee.admission}
                </li>
                {feeItems}
              </ul>
            </div>
            <hr />

            <div className='w3-row w3-large'>
              <h4>
                <strong>Available Seating</strong>
              </h4>
              <ul>
                <li>
                  <strong>Admission: </strong>
                  {hostel && "Rs. " + hostel.fee.admission}
                </li>
                {availableSeating}
              </ul>
            </div>
            <hr />

            <p>
              We accept: <i className='fa fa-credit-card w3-large' />{" "}
              <i className='fa fa-cc-mastercard w3-large' />{" "}
              <i className='fa fa-cc-amex w3-large' />{" "}
              <i className='fa fa-cc-cc-visa w3-large' />
              <i className='fa fa-cc-paypal w3-large' />
            </p>
            <hr />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  hostel: state.retriever.hostel,
  path: state.getPath.path,
});

export default connect(mapStateToProps, { getPath, retHostel })(HostelDetail);
