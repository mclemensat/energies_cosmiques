import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getWorkshopById } from "@services/api";

export default function WorkshopDescription() {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  const [queryString] = useSearchParams();

  const [workshop, setWorkshop] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const id = queryString.get("id");
      const result = await getWorkshopById(id);

      setWorkshop(result);
    };

    loadData();
  }, []);

  return (
    <div className="">
      <br></br>
      <button onClick={() => handleBackButton()}>
        <span className="ml-12 text-2xl">
          <i className="fa-solid fa-arrow-left-long"></i> Retour
        </span>
      </button>
      <div className="bg-slate-100 mt-12 m-[20%] rounded-b-xl">
        <img src={workshop.image} alt="" />
        <h4 className="text-3xl text-center my-12">{workshop.title}</h4>
        <p className="mb-3 font-normal text-gray-700">{workshop.description}</p>
        <p className="mb-3 font-normal text-gray-700">
          Tarif : {workshop.price} € par personne
        </p>
        <p className="mb-3 font-normal text-gray-700 mr-10">
          Durée : {workshop.duration} h
        </p>
      </div>
    </div>
  );
}
