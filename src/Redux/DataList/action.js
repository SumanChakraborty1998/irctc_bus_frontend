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

export const getData = (departure, arrival, date) => (dispatch, getState) => {
  const reqAction = getDataReq();
  dispatch(reqAction);

  return axios.get(`http://localhost:2244/routes/${departure}/${arrival}/${date}`)
    .then((res) => {
      const sucAction = getDataSuc(res.data.matchedBuses);
      console.log(res.data.matchedBuses);
      dispatch(sucAction);
      return { success: true };
    })
    .catch((err) => {
      const errAction = getDataFail(err);
      dispatch(errAction);
    });
};
