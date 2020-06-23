import React, { Fragment, useState } from "react";
import axios from "../../config/axios";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import "./Login.css";

const Upload = (props) => {
  const { setAlert } = props;
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("Choose File");
  const [filelength, setFilelength] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files);
    setFilename(e.target.files[0].name);
    setFilelength(e.target.files.length);
    console.log(e.target.files);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(props.formData);

    console.log(filelength);
    const formData = new FormData();
    Array.from(file).forEach((f) => formData.append("f", f, f.name));
    formData.append("userData", props.formData);
    console.log(formData.getAll("userData"));

    try {
      await axios.post("/api/add_hostel", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      setAlert("Images Uploaded Successfully", "success");
    } catch (error) {}
  };

  return (
    <Fragment>
      <div className='form'>
        <form className='center' onSubmit={onSubmit}>
          <div className='custom-file'>
            <input
              type='file'
              className='custom-file-input mt-4'
              id='customFile'
              multiple
              accept='image/*'
              onChange={onChange}
              name='f'
            />
            <label className='custom-file-label' htmlFor='customFile'>
              {filename}
            </label>
          </div>

          <input
            type='submit'
            value='upload'
            className='btn btn-primary btn-block'
          />
        </form>
      </div>
    </Fragment>
  );
};

export default connect(null, { setAlert })(Upload);
