import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";

import Home from "@pages/Home";
import LoginForm from "@components/LoginForm";
import Navbar from "./components/Navbar";

import LoginContext from "@contexts/LoginContext";

import "./App.css";
import BlogArticle from "./pages/BlogArticle";
// import BookingModal from "./components/BookingModal";
import WorkshopDescription from "./pages/WorkshopDescription";

function App() {
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
          <div className="bg-[url(@assets/marion.jpg)] bg-cover bg-[100%] bg-no-repeat min-h-screen w-screen">
            <Navbar
              handleLoginClick={handleLoginClick}
              currentUser={currentUser}
            />

            {!currentUser && (
              <LoginForm
                isShowLogin={isShowLogin}
                setIsShowLogin={setIsShowLogin}
              />
            )}
          </div>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<BlogArticle />} />
              {/* <Route path="/workshops" element={<BookingModal />} /> */}
              <Route path="/workshops" element={<WorkshopDescription />} />
            </Routes>
          </main>
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
