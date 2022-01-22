import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { bindActionCreators } from "redux";

function Counter({ counter, inc, res, dec, ran }) {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={inc} className="btn btn-primary">
        Increment +
      </button>
      <button onClick={res} className="btn btn-info">
        Restart -
      </button>
      <button onClick={dec} className="btn btn-danger">
        Decrement 0
      </button>
      <button onClick={ran} className="btn btn-success">
        Random #
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};

export default connect(mapStateToProps, actions)(Counter);
