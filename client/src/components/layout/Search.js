import React, { Fragment, useState, useRef } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import HostelCard from "../hostelCard/HostelCard";
import retriever from "../../actions/retriever";

import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import "./search.css";

const arrayOfData = [
  { name: "Pulchowk" },
  { name: "Patan" },
  { name: "Thapathali" },
  { name: "Ratnapark" },
  { name: "Babarmahal" },
];

const Search = ({ retriever }) => {
  let [nearbyInstitutions, setNearbyInstitutions] = useState("");
  let [location, setLocation] = useState("");
  let [loading, setLoading] = useState(false);
  let searchText = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ s: searchText.value, nearbyInstitutions, location, loading });
    await retriever(searchText.value, nearbyInstitutions, location);
    setLoading(false);
    var myElement = document.getElementById("searchBar");
    var topPos = myElement.offsetTop;
    console.log(topPos);
  };

  return (
    <Fragment>
      <Navbar />
      <div>
        <div className='container container-sm containerNirav my-5'>
          <img
            src={"/bermuda-searching.png"}
            alt='searching'
            className='responsive searchImg'
          />
          <h3 className='mb-2' id='searchBar'>
            Search Page{" "}
          </h3>
          <form>
            <div className='input-group'>
              <input
                className='form-control '
                placeholder='Search for the hostel'
                ref={(n) => (searchText = n)}
              />
              <button
                onClick={onSubmit}
                className='btn btn-outline-success ml-xl-2'
                type='submit'
              >
                {loading ? (
                  <div
                    className='spinner-border m-1'
                    style={{ width: "15px", height: "15px" }}
                    role='status'
                  >
                    <span className='sr-only'>Loading...</span>
                  </div>
                ) : (
                  "Search"
                )}
              </button>
            </div>

            <div className='row'>
              <div className='col'>
                <label>Nearby Institutions</label>
                <Dropdown
                  arrayOfData={arrayOfData}
                  onSelectChange={(e) => setNearbyInstitutions(e)}
                />
              </div>
              <div className='col'>
                <label>Hostel Address</label>
                <Dropdown
                  arrayOfData={arrayOfData}
                  name='location'
                  onSelectChange={(e) => setLocation(e)}
                />
              </div>
            </div>
          </form>
          <div className='card-deck'>
            <HostelCard />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect((_) => ({}), { setAlert, retriever })(Search);
