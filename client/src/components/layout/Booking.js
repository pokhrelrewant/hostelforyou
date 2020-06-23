import React, { Fragment, useState } from "react";
import MyDocument from "../pdfTemplate/index";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import "./Booking.css";
import validator from "validator";

const Booking = (hostel) => {
  const [formData, setFormData] = useState({
    name: "",
    studentEmail: "",
    studentAddress: "",
    dateToJoin: "",
    phoneNumber: "",
  });
  const [show, setHide] = useState(false);

  const {
    name,
    studentEmail,
    studentAddress,
    dateToJoin,
    phoneNumber,
  } = formData;
  let nameClassParam = "form-label";
  const onNameChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onEmailChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onAddressChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onPhoneChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onDateChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      // true
      validateTextInput(name) &&
      validateTextInput(studentAddress) &&
      validateEmail(studentEmail) &&
      validatePhone(phoneNumber)
    ) {
      console.log(hostel);
      setHide(true);
    }
    // alert("hello");
  };

  const onClear = (e) => {
    // e.preventDefault();
    console.log(e.target.name);
    setFormData({
      name: "",
      studentEmail: "",
      studentAddress: "",
      dateToJoin: "",
      phoneNumber: "",
    });
  };

  const validateTextInput = (props) => {
    return (
      validator.isAlphanumeric(props) && validator.isLength(props, { min: 3 })
    );
    // if (
    //   validator.isAlphanumeric(props) &&
    //   validator.isLength(props, { min: 3 })
    // ) {
    //   nameClassParam = "form-label";
    //   return true;
    // } else {
    //   nameClassParam = "form-label text-danger";
    //   return false;
    // }
  };

  const validatePhone = (props) => {
    return (
      validator.isNumeric(props) &&
      validator.isLength(props, { min: 6, max: 13 })
    );
  };
  const validateEmail = (props) => {
    return validator.isEmail(props);
  };

  return (
    <Fragment>
      <Navbar />
      <form onSubmit={onSubmit}>
        <div className='form-group formFields '>
          <div className=' container'>
            <h1>Enter your Details</h1>
            <p style={{ color: "green" }}>
              *Please fill up the form below to get discount receipt for
              selected hostel.*
            </p>
            <label className={nameClassParam}> Name</label>
            <input
              autoFocus
              type='text'
              value={name}
              name='name'
              onChange={(e) => onNameChange(e)}
              className='form-control'
              placeholder='Enter Name'
            />
          </div>
          <div className=' container'>
            <label> Email</label>
            <input
              type='email'
              value={studentEmail}
              name='studentEmail'
              onChange={(e) => onEmailChange(e)}
              className='form-control'
              placeholder='Enter Email'
            />
          </div>
          <div className=' container'>
            <label> Address</label>
            <input
              type='text'
              value={studentAddress}
              name='studentAddress'
              onChange={(e) => onAddressChange(e)}
              className='form-control'
              placeholder='Enter Address'
            />
          </div>
          <div className=' container'>
            <label> Expected Date To Join</label>
            <input
              type='month'
              value={dateToJoin}
              name='dateToJoin'
              onChange={(e) => onDateChange(e)}
              className='form-control'
              placeholder='Enter expected date to join'
            />
          </div>
          <div className=' container'>
            <label> Phone Number</label>
            <input
              type='number'
              value={phoneNumber}
              name='phoneNumber'
              onChange={(e) => onPhoneChange(e)}
              className='form-control'
              placeholder='Enter Phone Number'
            />
          </div>
        </div>
        <div className=' container center'>
          <button type='submit' className='btn btn-primary mr-2'>
            Submit
          </button>
          <button type='' className='btn btn-secondary ' onClick={onClear}>
            Clear
          </button>

          {show && (
            <div>
              <button className='btn btn-info  mt-2 mr-2'>
                <PDFDownloadLink
                  document={<MyDocument name={name} />}
                  fileName='reciept.pdf'
                  style={{
                    textDecoration: "none",
                    // padding: "10px",
                    color: "#FFFFFF",
                    // backgroundColor: "#f2f2f2",
                    // border: "1px solid #4a4a4a"
                  }}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Get Discount Receipt"
                  }
                </PDFDownloadLink>
              </button>
              <Link to='/search' className='btn btn-success mt-2'>
                Search Again
              </Link>
            </div>
          )}
        </div>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  hostel: state.retriever.hostel,
});

export default connect(mapStateToProps)(Booking);
