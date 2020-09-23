import {
  GET_LOGIN_STARTED,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILED,
} from "../actions/loginaction";


export var loginUsers = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case GET_LOGIN_STARTED:
      return {
        users: [],
        loading: true,
        error: null,
      };
    case GET_LOGIN_SUCCESS:
      return {
        users: action.users,
        loading: false,
        error: null,
      };
    case GET_LOGIN_FAILED:
      return {
        users: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
