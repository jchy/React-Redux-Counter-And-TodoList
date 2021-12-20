import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        count: state.count + action.payload
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        count: state.count - action.payload
      };
    }
    case RESET_COUNTER: {
      return {
        ...state,
        count: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
