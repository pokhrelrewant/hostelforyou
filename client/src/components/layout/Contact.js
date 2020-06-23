import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import axios from "../../config/axios";

const Contact = () => {
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
    try {
      const res = await axios.post("/api/contact", body, config);
    } catch (err) {}
  };

  return (
    <Fragment>
      <Navbar />
      <form onSubmit={onSubmit}>
        <div className=' container mt-4 '>
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

        <div className=' container mt-3 '>
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
        <div className=' container mt-3 '>
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
        <div className=' container mt-3 '>
          <button type='submit' className='btn btn-info d-flex'>
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Contact;
