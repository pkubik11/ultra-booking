import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import reducers from "./store/reducers/index";

import "./index.css";

const store: Store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
