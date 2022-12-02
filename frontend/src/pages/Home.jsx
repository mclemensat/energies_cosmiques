import { useState } from "react";

import About from "./About";
import Workshops from "./Workshops";
import Contact from "./Contact";
import Blog from "./Blog";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import AddArticleModal from "../components/AddArticleModal";

export default function Home() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleLoginClick = () => {
    setIsShowLogin(() => !isShowLogin);
  };

  const getLoginContext = () => {
    return { currentUser, setCurrentUser };
  };

  const [showAddArticleModal, setShowAddArticleModal] = useState(false);

  const handleShowModal = () => {
    setShowAddArticleModal(!showAddArticleModal);
  };

  return (
    <div>
      <div className="bg-[url(@assets/marion.jpg)] bg-cover bg-[100%] bg-no-repeat min-h-screen w-screen">
        <Navbar handleLoginClick={handleLoginClick} />

        {!currentUser && (
          <LoginForm
            isShowLogin={isShowLogin}
            setIsShowLogin={setIsShowLogin}
          />
        )}
      </div>
      <div className="mt-8 mx-4 sm:mb-20 md:mb-28">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center"
          id="about"
        >
          A propos
        </h2>
        <About />
      </div>

      <div className="min-h-screen bg-[#F0EEEC] px-12">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl pt-10 mb-12 text-center"
          id="workshops"
        >
          {" "}
          Les ateliers
        </h2>
        <Workshops />
      </div>

      <div className="min-h-screen mx-4">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center"
          id="blog"
        >
          Blog
        </h2>
        <div>
          {getLoginContext ? (
            <div>
              <button
                onClick={handleShowModal}
                className="text-red-800 border border-red-800 p-2 rounded"
              >
                {" "}
                + Ajouter un article
              </button>
              <AddArticleModal
                showAddArticleModal={showAddArticleModal}
                setShowAddArticleModal={setShowAddArticleModal}
              />
            </div>
          ) : (
            " "
          )}
        </div>
        <Blog />
      </div>

      <div className="bg-[url(@assets/contact.jpg)] bg-cover min-h-screen w-screen">
        <h2
          className="text-slate-200 text-3xl md:text-4xl lg:text-5xl lg:mb-[-20px] text-center pt-12"
          id="contact"
        ></h2>
        <Contact />
      </div>
    </div>
  );
}
