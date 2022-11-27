import { useState, useEffect } from "react";

import WorkshopsCards from "../components/WorkshopsCards";
import { getWorkshops } from "@services/api";

export default function Workshops() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await getWorkshops();
      setWorkshops(result);
    };

    loadData();
  }, []);

  return (
    <div className="flex flex-col text-xl items-center lg:flex-row md:justify-evenly">
      {workshops.map((workshop, id) => (
        <WorkshopsCards key={id} id={id} workshop={workshop} />
      ))}
    </div>
  );
}
