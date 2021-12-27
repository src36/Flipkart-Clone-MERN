import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductReducer,
  getProductDetailsReducer,
} from "./reducers/ProductReducer";
import { CartReducer } from "./reducers/CartReducer";

const reducer = combineReducers({
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
  cart: CartReducer,
});

const middleware = [thunk];

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
