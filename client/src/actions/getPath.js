import axios from "axios";
import { GET_PATH, PATH_ERROR } from "./types";

const getPath = imgFolder => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/pathCheck",
      {
        imgFolder
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    dispatch({
      type: GET_PATH,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PATH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export default getPath;
