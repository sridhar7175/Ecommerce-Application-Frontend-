import Axios from "axios";

export const GET_LOGIN_STARTED = "GET_LOGIN_STARTED";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED = "GET_LOGIN_FAILED";

export const LOGOUT='LOGOUT';

export function getLoginStatred() {
  return {
    type: GET_LOGIN_STARTED,
  };
}

export function getLoginSuccess(user) {
  console.log("user",user.data)
  return {
    type: GET_LOGIN_SUCCESS,
    payload:user.data
  };
}

export function getLoginFailed(error) {
  return {
    type: GET_LOGIN_FAILED,
    error,
  };
}

export function logout(){
  return{
    type:LOGOUT
  }
}

//Thunk Action
export function getLoginUser(email,password) {
  var user={email,password}
  return (dispatch) => {
    dispatch(getLoginStatred());
    Axios.post("http://localhost:5000/api/signin",user)
    //.then((res)=>console.log(res))
      .then((res) => {
        console.log("res", res);
        dispatch(getLoginSuccess(res));
      })
      .catch((error) => {
        dispatch(getLoginFailed(error));
      });
  };
}
