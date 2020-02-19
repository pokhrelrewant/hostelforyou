import React, { Fragment, useState } from "react";
import MyDocument from "../pdfTemplate/index";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { connect } from "react-redux";

const Booking = hostel => {
  console.log(hostel);
  const [formData, setFormData] = useState({
    name: "",
    studentEmail: "",
    studentAddress: "",
    dateToJoin: "",
    phoneNumber: ""
  });
  const [show, setHide] = useState(false);

  const {
    name,
    studentEmail,
    studentAddress,
    dateToJoin,
    phoneNumber
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log(hostel);
    setHide(true);
    // alert("hello");
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='form-group formFields'>
          <div className=' container'>
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
          <div className=' container'>
            <label> Email</label>
            <input
              type='email'
              value={studentEmail}
              name='studentEmail'
              onChange={e => onChange(e)}
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
              onChange={e => onChange(e)}
              className='form-control'
              placeholder='Enter Address'
            />
          </div>
          <div className=' container'>
            <label> Expected Date To Join</label>
            <input
              type='text'
              value={dateToJoin}
              name='dateToJoin'
              onChange={e => onChange(e)}
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
              onChange={e => onChange(e)}
              className='form-control'
              placeholder='Enter Phone Number'
            />
          </div>
        </div>
        <div className=' container'>
          <button type='submit' className='btn btn-primary btn-block'>
            Submit
          </button>
        </div>
      </form>
      {show && (
        <div>
          <button className='btn btn-primary btn-block mt-4'>
            <PDFDownloadLink
              document={<MyDocument name={name} />}
              fileName='reciept.pdf'
              style={{
                textDecoration: "none",
                padding: "10px",
                color: "#4a4a4a",
                backgroundColor: "#f2f2f2",
                border: "1px solid #4a4a4a"
              }}
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download Pdf"
              }
            </PDFDownloadLink>
          </button>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  hostel: state.retriever.hostel
});

export default connect(mapStateToProps)(Booking);
