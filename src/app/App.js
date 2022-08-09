import React from "react";
import Login from "../views/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../views/session/NotFound";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>

  );
}

export default App;
