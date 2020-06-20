import React from "react";

const Input = (props) => {
  let classVar;
  if (props.isValid) {
    classVar = "form-label ";
  } else {
    classVar = "form-label text-danger";
  }
  return (
    <div className='form-group'>
      <label htmlFor={props.name} className={classVar}>
        {props.title}
      </label>
      <input
        className='form-control text'
        id={props.name}
        name={props.name}
        type={props.inputtype}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required
      />
      {!props.isValid && (
        <div>
          <small id='inputHelp' className='text-danger'>
            Please Enter a valid {props.title}.
          </small>
        </div>
      )}
    </div>
  );
};

export default Input;
