import React, { Fragment, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: ""
  });

  const { name, location } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //   const onSubmit = async e => {
  //     e.preventDefault();
  //     alert("hello");
  //   };

  return (
    <Fragment>
      <form onSubmit={"mailto:pokhrelrewant@gmail.com"}>
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
    </Fragment>
  );
};

export default Contact;
