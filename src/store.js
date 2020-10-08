import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginUsers } from "./redux/reducers/loginreducer";
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import { products } from "./redux/reducers/productreducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import rootReducer from "./reducers";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginUsers"],
};
const rootStore = combineReducers({
  loginUsers,
  products,
});
const persistedReducer = persistReducer(persistConfig, rootStore);

const store = createStore(
  persistedReducer,

  composeWithDevTools(applyMiddleware(thunk))
);
let persistor = persistStore(store);
export { store, persistor };
