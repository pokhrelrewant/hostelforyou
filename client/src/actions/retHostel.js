import axios from "../config/axios";
import { SELECT_HOSTEL, RETRIEVE_ERROR } from "./types";

const retHostel = (slug) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(slug);
  try {
    const res = await axios.post(
      "/api/retrieve_hostels_id",
      { slug: slug },
      config
    );

    dispatch({
      type: SELECT_HOSTEL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RETRIEVE_ERROR,
      payload: {
        msg: err?.response?.statusText,
        status: err?.response?.status,
      },
    });
  }
};

export default retHostel;
