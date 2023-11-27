import React from "react";
import {   Route, Routes } from "react-router-dom";
import Dashbaord from "../../Pages/Dashbaord";
import Events from "../../Pages/Events";
import Members from "../../Pages/Members";
import Others from "../../Pages/Others";
import Login from "../../Pages/Login";
import Singup from "../../Pages/Singup";
function AppRoutes() {
    return (
      <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Dashbaord />}></Route>
      <Route path="/singup" element={<Singup/>}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/members" element={<Members />}></Route>
      <Route path="/others" element={<Others />}></Route>
    </Routes>
    );
  }
  export default AppRoutes;
  