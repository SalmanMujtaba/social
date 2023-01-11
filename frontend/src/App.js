import { Route, Routes } from "react-router-dom";

import { Home } from "./container/Home";
import Login from "./components/Login";
import React from "react";

export const App = () => {
  return (
    <Routes>
      <Route
        path='login'
        element={<Login />}></Route>
      <Route
        path='/*'
        element={<Home />}></Route>
    </Routes>
  );
};
