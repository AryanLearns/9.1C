import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";

import { auth } from "./firebase";
import Signout from "./components/Login/Signout.js";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />
        </Routes>

    </div>
  );
}

export default App;