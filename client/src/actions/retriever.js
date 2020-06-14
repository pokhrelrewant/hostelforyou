import axios from "../config/axios";
import { GET_HOSTEL, RETRIEVE_ERROR } from "./types";

const retriever = (name, nearbyInstitutions, location) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, nearbyInstitutions, location });
  try {
    const res = await axios.post("/api/retrieve_hostels", body, config);

    dispatch({
      type: GET_HOSTEL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RETRIEVE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export default retriever;
