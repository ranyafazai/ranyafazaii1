import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./layout/LandingLayout/Auth/SignIn";
import SignUp from "./layout/LandingLayout/Auth/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}