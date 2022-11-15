import { useState } from "react";

import About from "./About";
import Workshops from "./Workshops";
import Blog from "./Blog";
import Contact from "./Contact";

export default function Home() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const handleLoginClick = () => {
    setIsShowLogin(() => !isShowLogin);
  };

  const getLoginContext = () => {
    return { currentUser, setCurrentUser };
  };

  return (
    <div>
      <div className="mt-4 mx-4 sm:mb-20 md:mb-28">
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
        <Blog />
      </div>

      <div className="bg-[url(@assets/contact-bg.jpg)] bg-cover min-h-screen w-screen">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl lg:mb-[-20px] text-center pt-12"
          id="contact"
        >
          Contact
        </h2>
        <Contact />
      </div>
    </div>
  );
}
