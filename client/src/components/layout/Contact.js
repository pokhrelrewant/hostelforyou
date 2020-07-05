import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import axios from "../../config/axios";
import validator from "validator";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

const Contact = (props) => {
  const { setAlert } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, message });

    if (validator.isEmail(email) && validator.isAlpha(name)) {
      try {
        setAlert("Please Wait we are sending your message...", "warning");
        const res = await axios.post("/api/contact", body, config);

        setAlert(
          "Thank you for Contacting us.. We will reach out soon.",
          "success"
        );
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (err) {
        setAlert("Something went wrong, Please try again.", "danger");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } else {
      setAlert("Please Check the form and try again.", "danger");
    }
  };

  return (
    <Fragment>
      <Navbar />
      <form className='container containerNirav' onSubmit={onSubmit}>
        <div className='mt-4 '>
          <h1>Contact Us</h1>
          <label> Name</label>
          <input
            type='text'
            value={name}
            name='name'
            onChange={(e) => onChange(e)}
            className='form-control'
            placeholder='Enter Name'
          />
        </div>

        <div className=' mt-3 '>
          <label> Email</label>
          <input
            type='text'
            value={email}
            name='email'
            onChange={(e) => onChange(e)}
            className='form-control'
            placeholder='Enter E-mail'
          />
        </div>
        <div className='mt-3 '>
          <label> Message</label>
          <textarea
            type='text'
            value={message}
            name='message'
            rows='3'
            onChange={(e) => onChange(e)}
            className='form-control md-textarea'
            placeholder='What do you want to ask us?'
          ></textarea>
        </div>
        <div className='mt-3 '>
          <button type='submit' className='btn btn-info d-flex'>
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};
export default connect(null, { setAlert })(Contact);
