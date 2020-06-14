import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import HostelCard from "../hostelCard/HostelCard";
import retriever from "../../actions/retriever";

import Dropdown from "./Dropdown";
import Navbar from "./Navbar";

const NewSearch = ({ retriever }) => {
  const [formData, setFormData] = useState({
    name: "",
    nearbyInstitutions: "",
    location: "",
    buttonload: false,
  });

  const arrayOfData = [
    {
      id: 1,
      name: "Pulchowk",
    },
    {
      id: 2,
      name: "Patan",
    },
    {
      id: 3,
      name: "Thapathali",
    },
    {
      id: 4,
      name: "Ratnapark",
    },
    {
      id: 5,
      name: "Babarmahal",
    },
  ];

  const { name, nearbyInstitutions, location, buttonload } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onInstitutionChange = (nearbyInstitutions) => {
    console.log(arrayOfData[nearbyInstitutions - 1]);
    setFormData({
      ...formData,
      nearbyInstitutions: arrayOfData[nearbyInstitutions - 1].name,
    });
  };

  const onLocationChange = (location) => {
    console.log(arrayOfData[location - 1]);
    setFormData({ ...formData, location: arrayOfData[location - 1].name });
  };

  const onSubmit = async (e) => {
    setFormData({ ...formData, buttonload: true });
    console.log(formData);
    await retriever(name, nearbyInstitutions, location);
    setFormData({ ...formData, buttonload: false });
  };

  const showData = () => {
    return <HostelCard />;
  };

  return (
    <Fragment>
      <Navbar />

      <div>
        <div className='container container-sm containerNirav my-5'>
          <img
            src={"/bermuda-searching.png"}
            alt='searching'
            style={{
              margin: "0 auto",
              marginBottom: "50px",
              display: "block",
            }}
            class='responsive'
          />
          <h3 className='mb-2'>Search Page </h3>
          <div className='input-group'>
            <input
              value={name}
              name='name'
              onChange={(e) => onChange(e)}
              className='form-control '
              type='search'
              placeholder='Search for the hostel'
              aria-label='Search'
            />
            <button
              onClick={onSubmit}
              className='btn btn-outline-success ml-xl-2'
              type='submit'
            >
              {buttonload ? (
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
          <br />
          <div className='row'>
            <div className='col'>
              <label>Nearby Institutions</label>
              <Dropdown
                arrayOfData={arrayOfData}
                onSelectChange={(e) => onInstitutionChange(e)}
              />{" "}
              <br />
              <br />
            </div>
            <div className='col'>
              <label>Hostel Address</label>
              <Dropdown
                arrayOfData={arrayOfData}
                name='location'
                onSelectChange={(e) => onLocationChange(e)}
              />{" "}
              <br />
              <br />
            </div>
          </div>
          <div className='card-deck'>{showData()}</div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.retriever.loading,
});

export default connect(mapStateToProps, { setAlert, retriever })(NewSearch);
