import { createStore } from "redux";
// import { incrementCounter } from "./action";
import { reducer } from "./reducer";

const initState = {
  count: 0
};
export const store = createStore(reducer, initState);

console.log(store.getState());

store.subscribe(() => {
  console.log(`something has changed`, store.getState());
});

// const action = incrementCounter(1);
// store.dispatch(action);
