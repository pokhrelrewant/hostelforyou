import { GET_PATH, PATH_ERROR } from "../actions/types";

const initialState = {
  path: [],
  error: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PATH:
      return {
        ...state,
        path: payload,
        loading: false
      };
    case PATH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return {
        ...state
      };
  }
}
