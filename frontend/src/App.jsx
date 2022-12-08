import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useContext } from "react";

import Home from "@pages/Home";

import "./App.css";
import BlogArticle from "./pages/BlogArticle";
// import BookingModal from "./components/BookingModal";
import WorkshopDescription from "./pages/WorkshopDescription";

import LoginContextProvider from "@contexts/LoginContextProvider";

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleLoginClick = () => {
    setIsShowLogin(() => !isShowLogin);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <LoginContextProvider>
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    handleLoginClick={handleLoginClick}
                  />
                }
              />
              <Route path="/posts" element={<BlogArticle />} />
              {/* <Route path="/workshops" element={<BookingModal />} /> */}
              <Route path="/workshops" element={<WorkshopDescription />} />
            </Routes>
          </div>
        </LoginContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
