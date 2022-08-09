import React from "react";
import Login from "../views/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../views/session/NotFound";
import UserRegistration from "../views/UserRegistration"

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='userRegistration' element={<UserRegistration/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>

  );
}

export default App;
