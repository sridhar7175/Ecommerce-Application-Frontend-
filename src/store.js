import { createStore, combineReducers ,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {users} from './redux/reducer'
const rootStore = combineReducers({
  users
});
const store = createStore(
  rootStore,applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
