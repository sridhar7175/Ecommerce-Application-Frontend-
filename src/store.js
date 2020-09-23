import { createStore, combineReducers, applyMiddleware } from "redux";
//import { users } from "./redux/reducers/loginreducer";
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import { products } from "./redux/reducers/productreducer";
import thunk from "redux-thunk";
const rootStore = combineReducers({
  products,
});
const store = createStore(
  rootStore,
  applyMiddleware(thunk),
);
export default store;
