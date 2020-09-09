import { GET_USERS_LOGIN, GET_USERS_SUCCESS, GET_USERS_FAILED } from "../actions/loginaction";

var initialState = {
  users: [],
  loading: false,
  error: false,
};

export const users = (state = initialState, action) => {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case GET_USERS_LOGIN:
      return {
        users: [],
        loading: true,
        error: false,
      };
    case GET_USERS_SUCCESS:
      return {
        users: action.users,
        loading: false,
        error: false,
      };
    case GET_USERS_FAILED:
      return {
        users: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
