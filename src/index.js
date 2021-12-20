import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import { store_two } from "./TodoRedux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store_two}>
      <Provider store={store}>
        <App />
      </Provider>
    </Provider>
  </StrictMode>,
  rootElement
);
