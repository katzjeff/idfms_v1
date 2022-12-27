import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import RegisterUser from "./pages/RegisterUser";
import UnderConstruction from "./pages/UnderConstruction";

import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/Contact" element={<UnderConstruction />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
