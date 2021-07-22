import axios from "axios";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

export const getDataReq = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

export const getDataSuc = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};
export const getDataFail = (err) => {
  return {
    type: GET_DATA_FAILURE,
    payload: err,
  };
};

export const getData = (id) => (dispatch, getState) => {
  const reqAction = getDataReq();
  dispatch(reqAction);

  return axios
    .get(`http://localhost:2244/${id}`)
    .then((res) => {
      const sucAction = getDataSuc(res.data.data);
      dispatch(sucAction);
      return { success: true };
    })
    .catch((err) => {
      const errAction = getDataFail(err);
      dispatch(errAction);
    });
};
