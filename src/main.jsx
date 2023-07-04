import React from "react";
import ReactDOM from "react-dom/client";
import { MultipleRequestApp } from "./MultipleRequestApp";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { Form, Formik } from "formik";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MultipleRequestApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
