import React, { Fragment, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Carousel from "./Carousel";
import getPath from "../../actions/getPath";
import "./hostelDetail.css";
import Navbar from "../layout/Navbar";
import retHostel from "../../actions/retHostel";

const HostelDetail = ({match, hostel, path, retHostel}) => {
  let [features, setFeatures] = useState({});
  useEffect(() => {
    if (match.path === "/hostel/:id") {
      retHostel(match.params.id);
    }
  }, [match,retHostel]);

  let i = 1;
  return (
    <Fragment>
      <Navbar />
      <div>
        <div className='container container-sm containerNirav my-2 my-sm-4'>
            <div id='demo' className='carousel slide' data-ride='carousel'>
              <h2 className='w3-text-green'>{hostel&&hostel.name}</h2>
              <h4>{hostel&&hostel.location}</h4>
              <div>{hostel&&(<Carousel imgFolder={hostel.photos} images={hostel.photosPath}/>)}</div>
            </div>

          <div className='mt-3 w3-container'>
            <h4> Nearby Institutions </h4>
            <ul>
              {hostel && hostel.nearbyInstitutions.map(item => (<li key={i++}>{item}</li>))}
            </ul>


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
                {features["running water"]&&(<p><i className='fa fa-fw fa-shower' />Shower</p>)}
                {features["free wifi"]&&(<p><i className='fa fa-fw fa-wifi' /> WiFi</p>)}
                {features["24 hours electricity"]&&(<p><i className='fa fa-fw fa-tv' /> 24 Hour Electricity</p>)}
              </div>
              <div className='w3-col s6'>
                {features["kitchen"]&&(<p><i className='fa fa-fw fa-cutlery' /> Kitchen</p>)}
                {features["heating"]&&(<p><i className='fa fa-fw fa-thermometer' /> Heating</p>)}
                {features["accessible"]&&(<p><i className='fa fa-fw fa-wheelchair' /> Accessible</p>)}
              </div>
            </div>
            <hr />
            {hostel && (hostel.hostelFeatures[0].FurnitureAndClothing !==undefined) && (<div className='w3-row w3-large'>
              <h4>Furniture and Clothing</h4>
              <ul>
                <li>{hostel.hostelFeatures?.FurnitureAndClothing[0]}</li>
              </ul>
              <hr />
            </div>)}

            <h4>Discount we've negiotiated for you: Rs. {hostel && hostel.discountOffered}</h4>

            <div className='w3-row w3-large'>
            <h4>Pricing</h4>
            <p><strong>Admission: </strong>{hostel && ("Rs. " + hostel.fee.admission)}</p>
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

const mapStateToProps = state => ({
  hostel: state.retriever.hostel,
  path: state.getPath.path,
  //loading: state.getPath.loading
});

export default connect(mapStateToProps, { getPath, retHostel })(HostelDetail);
