import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS, LOG_OUT } from "./actionType";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  email: "",
  password: "",
};
export const LoginReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS: {
      const dataLocal = {
        ...state,
        isLoading: false,
        isAuth: true,
        email: payload.email,
        password: payload.password,
      };

      saveData("data", dataLocal);
      return dataLocal;
    }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOG_OUT:
      saveData("auth", false);
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
