import { useState, useContext } from "react";

import About from "./About";
import Workshops from "./Workshops";
import Contact from "./Contact";
import Blog from "./Blog";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import AddArticleModal from "../modals/AddArticleModal";

import { LoginContext } from "@contexts/LoginContextProvider";

export default function Home() {
  const { currentUser } = useContext(LoginContext);
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [showAddArticleModal, setShowAddArticleModal] = useState(false);

  const handleLoginClick = () => {
    setIsShowLogin(() => !isShowLogin);
  };

  const handleShowModal = () => {
    setShowAddArticleModal(!showAddArticleModal);
  };

  return (
    <div>
      <div className="bg-[url(@assets/marion.jpg)] bg-cover bg-[100%] bg-no-repeat min-h-screen w-screen">
        {!currentUser && (
          <LoginForm
            isShowLogin={isShowLogin}
            setIsShowLogin={setIsShowLogin}
          />
        )}
        <Navbar handleLoginClick={handleLoginClick} />
      </div>
      <div className="mt-12 mx-4 sm:mb-20 md:mb-28">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl mb-20 text-center"
          id="about"
        >
          A propos
        </h2>
        <About />
      </div>

      <div className="bg-[#F0EEEC] px-12 mb-8">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl pt-10 mb-12 text-center"
          id="workshops"
        >
          {" "}
          Les ateliers
        </h2>
        <Workshops />
      </div>

      <div className="min-h-screen mt-12 mx-4">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center"
          id="blog"
        >
          Blog
        </h2>
        <div>
          {currentUser ? (
            <div>
              <button
                onClick={handleShowModal}
                className="ml-4 text-lg bg-[#F0EEEC] text-gray-500 border border-gray-500 py-3 p-4 rounded-lg hover:bg-gray-400 hover:text-gray-200"
              >
                {" "}
                <i class="fa-regular fa-plus"></i> Ajouter un article
              </button>
              <AddArticleModal
                showAddArticleModal={showAddArticleModal}
                handleShowModal={handleShowModal}
              />
            </div>
          ) : (
            " "
          )}
        </div>
        <Blog
        />
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
