import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "incrementBy5") {
    return { counter: state.counter + action.amount };
  }
  if (action.type === "decrementBy5") {
    return { counter: state.counter - action.amount };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
