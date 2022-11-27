import { useState } from "react";

import { Link } from "react-router-dom";

import BookingModal from "./BookingModal";

export default function WorkshopsCards({
  workshop: { id, title, description, price, duration, image },
}) {
  const [isShowBookingForm, setIsShowBookingForm] = useState(false);

  return (
    <div
      key={id}
      className="max-w-lg lg:max-w-md bg-white rounded-lg border border-gray-200 shadow-md mt-8 mb-8"
    >
      <a href="#">
        <img className="rounded-t-lg w-full h-64" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <div className="flex justify-between">
          <p className="mb-3 font-normal text-gray-700">
            Tarif : {price} € par personne
          </p>
          <p className="mb-3 font-normal text-gray-700 mr-10">
            Durée : {duration} h
          </p>
        </div>
        <Link to={`/workshops?id=${id}`}>
          <a href="#" className="underline">
            En savoir plus
          </a>
        </Link>
        <br></br>
        {/* <Link to={`/workshops?id=${id}`}> */}
        <div className="flex justify-center">
          <button className="mt-6 mt-2 py-2 px-5 font-medium text-center text-white bg-[#D7BFA8] rounded-lg hover:bg-[#DAB99A] focus:outline-none">
            Réserver
          </button>
        </div>
        {/* </Link> */}
        {isShowBookingForm ? <BookingModal onClick={handleClick} /> : ""}
      </div>
    </div>
  );
}
