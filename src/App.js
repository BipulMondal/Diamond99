import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import "./style.css"
// import "./modal/Modal.css"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <BrowserRouter>
          <AppRoutes />
          <ToastContainer theme="light" />
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
