import axios from "axios";
import { SIGNUP_REQ, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./actionType";

export const signupReq = () => {
  return {
    type: SIGNUP_REQ,
  };
};

export const signupSuc = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};

export const signupFail = (payload) => {
  return {
    type: SIGNUP_FAILURE,
    payload,
  };
};

export const signupUser = (payload) => (dispatch) => {
  dispatch(signupReq());
  axios
    .post("http://localhost:2244/users", payload)
    .then((res) => {
      dispatch(signupSuc(res.data));
      console.log(res.data);
    })
    .catch((err) => dispatch(signupFail(err)));
};
