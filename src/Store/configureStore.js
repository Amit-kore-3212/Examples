import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import backEndReducer from "../Reducers/backEndReducer";
import incrementReducer from "../Reducers/icrementReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      count: incrementReducer,
      data: backEndReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
//  asynchronous operations its i/p and output
//it will help us to make asynchrnous operations it will help us to retrun a function
