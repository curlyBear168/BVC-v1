import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "../blockchain/blockchain_girl/blockchainReducer";
import dataReducer from "../data/data_girl/dataReducer";

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
