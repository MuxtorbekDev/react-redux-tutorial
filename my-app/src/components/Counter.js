import React from "react";
import { useDispatch } from "react-redux";
import { inc, res, dec, ran } from "../redux/actions";
import { useSelector } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        Increment +
      </button>
      <button onClick={() => dispatch(res())} className="btn btn-info">
        Restart 0
      </button>
      <button onClick={() => dispatch(dec())} className="btn btn-danger">
        Decrement -
      </button>
      <button onClick={() => dispatch(ran())} className="btn btn-success">
        Random #
      </button>
    </div>
  );
}

export default Counter;
