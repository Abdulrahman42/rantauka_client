import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import houses from "../_reducers/houses";
import booking from "../_reducers/booking";
import orders from "../_reducers/orders";

const reducers = combineReducers({
  houses,
  booking,
  orders
});

const store = createStore(reducers, applyMiddleware(logger, promise));

export default store;
