import { useState } from "react";

import Navbar from "../components/Navbar";
import BookingModal from "@components/BookingModal";

export default function Home() {
  const [isShowContactForm, setIsShowContactForm] = useState(false);

  const handleClick = () => {
    setIsShowContactForm(!isShowContactForm);
  };

  return (
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
  );
}
