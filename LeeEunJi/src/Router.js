import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {/* <Route path="/Singup" element={<Signup />}></Route> */}
        <Route path="/Main" element={<Main />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default Router;
