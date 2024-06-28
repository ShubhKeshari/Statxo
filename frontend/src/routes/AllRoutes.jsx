import React from "react";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashborad";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export { AllRoutes };
