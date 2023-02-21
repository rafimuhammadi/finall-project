import { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
