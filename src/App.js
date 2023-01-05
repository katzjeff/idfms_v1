import React, { useContext } from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
// import RegisterUser from "./pages/RegisterUser";
// import UnderConstruction from "./pages/UnderConstruction";
import Terms from "./pages/Terms";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Contact from "./pages/Contact";

//Dashboard Links
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.scss";
import { productInputs, userInputs } from "./formSource";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />

        {/* Dashboard Links */}

        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
