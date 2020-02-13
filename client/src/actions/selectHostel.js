import { SELECT_HOSTEL } from "./types";
const selectHostel = clickedHostel => async dispatch => {
  console.log(clickedHostel[0]);
  dispatch({
    type: SELECT_HOSTEL,
    payload: clickedHostel[0]
  });
};

export default selectHostel;
