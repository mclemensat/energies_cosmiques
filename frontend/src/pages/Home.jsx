import { useState } from "react";

import Navbar from "../components/Navbar";
import BookingModal from "../components/BookingModal";
import About from "./About";
import Workshops from "./Workshops";
import Contact from "./Contact";

export default function Home() {
  const [isShowBookingForm, setIsShowBookingForm] = useState(false);

  const handleClick = () => {
    setIsShowBookingForm(!isShowBookingForm);
  };

  return (
    <div>
      <div className="bg-[url(@assets/zen.jpg)] bg-cover min-h-screen w-screen">
        <h1 className="text-5xl mt-[10%] text-right mr-[15%]">
          Energies cosmiques
        </h1>
        <div className="text-2xl mt-10 text-right mr-[20%]">
          <button
            onClick={handleClick}
            className="text-white font-light bg-[#D7BFA8] border border-[#A4978F] rounded-lg py-3 px-6"
          >
            {" "}
            Réserver un atelier{" "}
          </button>
          {isShowBookingForm ? <BookingModal onClick={handleClick} /> : ""}
        </div>
      </div>

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
