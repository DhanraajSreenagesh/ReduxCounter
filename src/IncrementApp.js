// import { useState } from "react";
import "./styles.css";
import incrementActions from "./incrementAction";
import decrementActions from "./decrementAction";
import { connect } from "react-redux";

const IncrementAppComponent = (props) => {
  // let [value, setValue] = useState(0);

  console.log("pooppoo", props);
  const { countReducers } = props;
  const { count } = countReducers;
  console.log("###", countReducers);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{count}</div>
      <button type="button" onClick={props.incrementActions}>
        +
      </button>

      {/* <input type="text" value={value} onChange={handleOnChange}></input> */}

      <button type="button" onClick={props.decrementActions}>
        -
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { countReducers } = state;

  return {
    countReducers
  };
};

export const IncrementApp = connect(mapStateToProps, {
  incrementActions,
  decrementActions
})(IncrementAppComponent);
