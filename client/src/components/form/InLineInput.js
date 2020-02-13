import React, { Fragment } from "react";

const InLineInput = props => {
  //console.log(props.value);
  return (
    <div className='row'>
      <label for={props.name} className='col col-form-label'>
        {props.title}
      </label>
      <input
        className='form-control col-8'
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
        required
      />
      {/* <label for={props.name} className="col col-form-label">
        {props.afterlabel}
        </label> */}
    </div>
  );
};

export default InLineInput;
