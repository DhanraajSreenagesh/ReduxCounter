import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { IncrementApp } from "./IncrementApp";
import { Provider } from "react-redux";
import store from "./configureStore";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <IncrementApp />
    </StrictMode>
    ,
  </Provider>,
  rootElement
);
