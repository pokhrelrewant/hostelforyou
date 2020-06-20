import React from "react";

const InLineInput = (props) => {
  //console.log(props.value);
  return (
    <div className='row'>
      <label htmlFor={props.name} className='col col-form-label'>
        {props.title}
      </label>
      <input
        className='form-control col-8'
        id={props.name}
        name={props.name}
        type={props.inputtype}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required
      />
      {/* <label for={props.name} className="col col-form-label">
        {props.afterlabel}
        </label> */}
    </div>
  );
};

export default InLineInput;
