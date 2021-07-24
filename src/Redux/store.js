import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./DataList/reducer";
import { registerReducer } from "./SignUp/reducer";
import { LoginReducer } from "./LogIn/reducer";

const rootReducer = combineReducers({
  dataList: dataReducer,
  register: registerReducer,
  login: LoginReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
