import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../component/Login";
import { Profile } from "../component/Profile";
import { Register } from "../component/Register";

export const Routess = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
};
