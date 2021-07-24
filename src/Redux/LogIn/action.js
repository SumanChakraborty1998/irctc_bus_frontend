import axios from "axios";
import { LOGIN_REQ, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType";

export const loginReq = () => {
  return {
    type: LOGIN_REQ,
  };
};

export const loginSuc = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFail = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

export const loginUser = (payload) => (dispatch) => {
  dispatch(loginReq());
  axios
    .get(`http://localhost:3001/users/${payload.email}/${payload.password}`)
    .then((res) => {
      dispatch(loginSuc(res.data));
    })
    .catch((err) => dispatch(loginFail(err)));
};
