import { createStore, combineReducers, applyMiddleware } from "redux";
import { users } from "./redux/reducers/loginreducer";
import thunk from "redux-thunk";
const rootStore = combineReducers({
  users,
});
const store = createStore(
  rootStore,
  applyMiddleware(thunk),
);
export default store;
