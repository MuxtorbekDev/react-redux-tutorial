import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";
import reducer from "./redux/reducer";
import * as actions from "./redux/actions";

const store = createStore(reducer);
const { dispatch, getState, subscribe } = store;

subscribe(() => {
  document.getElementById("counter").innerText = getState().value;
});

const { inc, dec, res, ran } = bindActionCreators(actions, dispatch);

document.getElementById("increment").addEventListener("click", () => {
  inc();
});
document.getElementById("decrement").addEventListener("click", () => {
  dec();
});
document.getElementById("restart").addEventListener("click", () => {
  res();
});
document.getElementById("random").addEventListener("click", () => {
  const randomValueOne = Math.floor(Math.random() * 10);
  const randomValueTwo = Math.floor(Math.random() * 10);
  const randomValueTHree = Math.floor(Math.random() * 10);
  ran(randomValueOne, randomValueTwo, randomValueTHree);
});

ReactDOM.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>,
  document.getElementById("root")
);
