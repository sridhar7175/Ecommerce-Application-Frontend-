import { GET_LOGOUT } from "../actions/logoutaction";

export const logout = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case GET_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
