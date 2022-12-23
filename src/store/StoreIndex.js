import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action === "INCREMENTBY2") {
    return { counter: state.counter + 2 };
  }
  if (action === "DECREMENTBY2") {
    return { counter: state.counter - 2 };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
