import React, { Fragment, useState } from "react";
import axios from "axios";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";

const Upload = props => {
  const { id, setAlert } = props;
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [filelength, setFilelength] = useState(0);

  const onChange = e => {
    setFile(e.target.files);
    setFilename(e.target.files[0].name);
    setFilelength(e.target.files.length);
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(filelength);
    const formData = new FormData();
    for (let i = 0; i < filelength; i++) {
      formData.append(`file${i}`, file[i]);
    }
    formData.append("id", id);
    console.log(formData.get("id"));
    // console.log(formData);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      setAlert("Images Uploaded Successfully", "success");
    } catch (error) {
      if (error.response.status === 500) {
        console.log("Server Error");
      }
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='custom-file'>
          <input
            type='file'
            className='custom-file-input mt-4'
            id='customFile'
            multiple
            accept='image/*'
            onChange={onChange}
          />
          <label className='custom-file-label' for='customFile'>
            {filename}
          </label>
        </div>

        <input
          type='submit'
          value='upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    </Fragment>
  );
};

export default connect(null, { setAlert })(Upload);
