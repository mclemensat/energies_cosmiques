import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "@pages/Home";
import LoginForm from "@components/LoginForm";
import LoginContext from "@contexts/LoginContext";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [loader, setLoader] = useState(true);
  const [isShowLogin, setIsShowLogin] = useState(false);

  const [currentUser, setCurrentUser] = useState("");

  const handleLoginClick = () => {
    setIsShowLogin(() => !isShowLogin);
  };

  const getLoginContext = () => {
    return { currentUser, setCurrentUser };
  };

  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext.Provider value={getLoginContext()}>
        <Navbar
            handleLoginClick={handleLoginClick}
          />
          <main>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
          </main>
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
