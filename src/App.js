import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
// import RegisterUser from "./pages/RegisterUser";
import UnderConstruction from "./pages/UnderConstruction";
import Terms from "./pages/Terms";

import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<UnderConstruction />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
