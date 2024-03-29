import { combineReducers, createStore, applyMiddleware } from "redux";
// import reducer from "./reducer";
import authReducer from "./auth/reducer";
import appReducer from "./app/reducer";

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("dispatching the action", action);
  console.log(store.getState());
  const value = next(action);
  console.log(value);
  console.log(store.getState());
};

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);

console.log(store.getState());
// * combine reducers
// create app and auth folders
// action, actionTypes, reducers
// use combineReducers, to create a root reducer
// refactor components which consume the store  values
// useSelector(state=>state.auth.token)
// useSelector(state=>state.app.todos)
// fix import statements across all actions that we are importing

// * setting up redux
// create actions
// create reducer
// create store
// pass store in provider
// select data from store, and
//  ---- pass it to required elements
// dispatch an action depending on user input

// * developer tools
