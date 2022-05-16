import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import "react-toastify/dist/ReactToastify.css";
import "./styles/app.scss";
import AddEdit from "./components/AddEdit";
import View from "./components/View";

const App = () => {
  return (
    <div className="app-main">
      <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/addedit" element={<AddEdit />} />
        <Route exact path="/update/:id" element={<AddEdit />} />
        <Route exact path="/view/:id" element={<View />} />
      </Routes>
    </div>
  );
};

export default App;
