import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import Layout from "./components/Layout";
import ViewUsers from "./components/ViewUsers";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<ViewUsers />} />
            <Route path="/add" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
