import { createStore } from "redux";
import rootReducer from "../reducers/reducer";
//CREATE STORE
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
