import React from "react";
import Login from "../views/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../views/session/NotFound";
import UserRegistration from "../views/UserRegistration";
import DashBoard from "../views/DashBoard";
import ProductManage from "../views/ProductManage";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='userRegistration' element={<UserRegistration/>}/>
      <Route path='dashBoard' element={<DashBoard/>}/>
      <Route path='productManage' element={<ProductManage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>

  );
}

export default App;
