import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const initialState = { value: 0, name: "Muxtorbek", age: 20 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
      };
    case "RESTART":
      return {
        ...state,
        value: (state.value = 0),
      };
    case "RANDOM":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const update = () => {
  document.getElementById("counter").innerText = store.getState().value;
};
store.subscribe(update);

const inc = () => ({ type: "INCREMENT" });
const dec = () => ({ type: "DECREMENT" });
const res = () => ({ type: "RESTART" });
const ran = (randomValueOne, randomValueTwo, randomValueTHree) => ({
  type: "RANDOM",
  payload:
    randomValueOne * randomValueTwo ** 2 +
    randomValueTHree * randomValueTwo ** 2 +
    randomValueOne * randomValueTHree ** 2,
});

document.getElementById("increment").addEventListener("click", () => {
  store.dispatch(inc());
});
document.getElementById("decrement").addEventListener("click", () => {
  store.dispatch(dec());
});
document.getElementById("restart").addEventListener("click", () => {
  store.dispatch(res());
});
document.getElementById("random").addEventListener("click", () => {
  const randomValueOne = Math.floor(Math.random() * 10);
  const randomValueTwo = Math.floor(Math.random() * 10);
  const randomValueTHree = Math.floor(Math.random() * 10);
  store.dispatch(ran(randomValueOne, randomValueTwo, randomValueTHree));
});

ReactDOM.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>,
  document.getElementById("root")
);
