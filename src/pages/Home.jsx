import { useState } from "react";

import Navbar from "../components/Navbar";
import BookingModal from "@components/BookingModal";
import About from "./About";
import Workshops from "./Workshops";

export default function Home() {
  const [isShowContactForm, setIsShowContactForm] = useState(false);

  const handleClick = () => {
    setIsShowContactForm(!isShowContactForm);
  };

  return (
    <div>
    <div className="bg-[url(@assets/zen.jpg)] bg-cover min-h-screen w-screen">
      <Navbar />
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
        {isShowContactForm ? <BookingModal onClick={handleClick} /> : ""}
      </div>
      </div>

      <div className="mt-4 mx-4 sm:mb-20 md:mb-28">
      <h2 className="text-3xl md:text-4xl mb-12" id="about">A propos</h2>
      <About />
      </div>

      <div className="min-h-screen bg-[#F0EEEC] px-12">
      <h2 className="text-3xl md:text-4xl pt-10 mb-12 text-center" id="workshops"> Les ateliers</h2>
      <Workshops />
      </div>

      <div className="min-h-screen mx-4">
      <h2 className="text-3xl md:text-4xl mb-12" id="blog">Blog</h2>
      </div>

      <div className="mx-4">
      <h2 className="text-3xl md:text-4xl mb-12" id="contact">Contact</h2>
      </div>

    </div>
  );
}
