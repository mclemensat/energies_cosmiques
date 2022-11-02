import { useState } from "react";

import BookingModal from "./BookingModal";

export default function WorkshopsCards() {
  const [isShowBookingForm, setIsShowBookingForm] = useState(false);

  const handleClick = () => {
    setIsShowBookingForm(!isShowBookingForm);
  };

  return (
    <div className="flex flex-col text-xl items-center md:flex-row md:justify-evenly">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mb-8">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="./src/assets/zen-flower.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900">
              Atelier lorem
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet. Aut dolore dolore et asperiores
            adipsisci aut numquam iusto est quas.
          </p>
          <div className="flex justify-between">
            <p className="mb-3 font-normal text-gray-700">
              Tarif : 15€ par personne
            </p>
            <p className="mb-3 font-normal text-gray-700 mr-10">Durée : 2h</p>
          </div>
          <a href="#" className="underline">
            En savoir plus
          </a>
          <br></br>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="mt-6 mt-2 py-2 px-5 font-medium text-center text-white bg-[#D7BFA8] rounded-lg hover:bg-[#DAB99A] focus:outline-none"
            >
              Réserver
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mb-8">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="./src/assets/zen-flower.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900">
              Atelier ipsum
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet. Aut dolore dolore et asperiores
            adipsisci aut numquam iusto est quas.
          </p>
          <div className="flex justify-between">
            <p className="mb-3 font-normal text-gray-700">
              Tarif : 15€ par personne
            </p>
            <p className="mb-3 font-normal text-gray-700 mr-10">Durée : 2h</p>
          </div>
          <a href="#" className="underline">
            En savoir plus
          </a>
          <br></br>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="mt-6 py-2 px-5 font-medium text-center text-white bg-[#D7BFA8] rounded-lg hover:bg-[#DAB99A] focus:outline-none"
            >
              Réserver
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mb-8">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="./src/assets/zen-flower.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900">
              Atelier relaxation
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet. Aut dolore dolore et asperiores
            adipsisci aut numquam iusto est quas.
          </p>
          <div className="flex justify-between">
            <p className="mb-3 font-normal text-gray-700">
              Tarif : 15€ par personne
            </p>
            <p className="mb-3 font-normal text-gray-700 mr-10">Durée : 2h</p>
          </div>
          <a href="#" className="underline">
            En savoir plus
          </a>
          <br></br>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="mt-6 py-2 px-5 font-medium text-center text-white bg-[#D7BFA8] rounded-lg hover:bg-[#DAB99A] focus:outline-none"
            >
              Réserver
            </button>
          </div>
          {isShowBookingForm ? <BookingModal onClick={handleClick} /> : ""}
        </div>
      </div>
    </div>
  );
}
