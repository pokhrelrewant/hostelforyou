import { GET_HOSTEL, RETRIEVE_ERROR, SELECT_HOSTEL } from "../actions/types";

const initialState = {
  hostel: null,
  hostels: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HOSTEL:
      return {
        ...state,
        hostels: payload,
        loading: false
      };
    case RETRIEVE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case SELECT_HOSTEL:
      return {
        ...state,
        hostel: payload
      };
    default:
      return {
        ...state
      };
  }
}
