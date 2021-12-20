export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "INCREMENT_COUNTER";
export const RESET_COUNTER = "RESET";

export const incrementCounter = (amount) => ({
  type: INCREMENT_COUNTER,
  payload: amount
});

export const decrementCounter = (amount) => ({
  type: DECREMENT_COUNTER,
  payload: amount
});
export const resetCounter = (amount = 0) => ({
  type: RESET_COUNTER,
  payload: amount
});
