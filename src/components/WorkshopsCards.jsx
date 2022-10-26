export default function WorkshopsCards() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-evenly">
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
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
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
            <a
              href="#"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-[#D7BFA8] rounded-lg hover:bg-[#DAB99A] focus:outline-none"
            >
              Réserver
            </a>
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
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
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
            <a
              href="#"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-[#D7BFA8] rounded-lg hover:bg-[#DAB99A] focus:outline-none"
            >
              Réserver
            </a>
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
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
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
            <a
              href="#"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-[#D7BFA8] rounded-lg hover:bg-[#DAB99A] focus:outline-none"
            >
              Réserver
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
