import React, { Fragment, useState, useEffect } from "react";
import retriever from "../../actions/retriever";
import { connect } from "react-redux";
import HostelCard from "../hostelCard/HostelCard";
import Navbar from "./Navbar";

const Form = ({ retriever, loading, hostel, error }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: ""
  });

  const { name, location, topic } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    alert("hello");
    retriever(name, location);
    // console.log(hostel.hostels);
    console.log(loading);
    // console.log(hostel);
  };

  const showData = () => {
    return (
      <div>
        <HostelCard />
      </div>
    );
  };

  return (
    <Fragment>
      <Navbar />
      <form onSubmit={onSubmit}>
        <div className=' container mt-4'>
          <label> Name</label>
          <input
            type='text'
            value={name}
            name='name'
            onChange={e => onChange(e)}
            className='form-control'
            placeholder='Enter Name'
          />
        </div>

        <div>
          <div className=' container mt-3'>
            <label> Location</label>
            <input
              type='text'
              value={location}
              name='location'
              onChange={e => onChange(e)}
              className='form-control'
              placeholder='Enter Location'
            />
          </div>
        </div>
        <div className=' container mt-4'>
          <button type='submit' className='btn btn-primary btn-block'>
            Submit
          </button>
        </div>
      </form>
      {showData()}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  hostel: state.retriever,
  loading: state.retriever.loading,
  error: state.retriever.error
});

export default connect(mapStateToProps, { retriever })(Form);
