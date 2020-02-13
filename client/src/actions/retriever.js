import axios from "axios";
import { GET_HOSTEL, RETRIEVE_ERROR, SELECT_HOSTEL } from "./types";

const retriever = (name, location) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ name, location });
  try {
    const res = await axios.post(
      "http://localhost:5000/api/retrieve_hostels",
      body,
      config
    );

    dispatch({
      type: GET_HOSTEL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RETRIEVE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export default retriever;
