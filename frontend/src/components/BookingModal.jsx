import { useState } from "react";
import Calendar from "react-calendar";

export default function BookingModal({ onClick }) {
  const [showModal, setShowModal] = useState(false);
  const [chosenDate, onChange] = useState(new Date());
  const [participantsNumber, setParticipantsNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        id="booking-modal"
        tabIndex="-1"
        className="backdrop-blur-[3px] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 justify-center items-center flex"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-lg">
          <div className="relative bg-[#D9D9D9] rounded-lg shadow-lg">
            <button
              type="button"
              className="absolute top-4 right-4 text-secondary hover:bg-primary hover:text-[#1d3c45] hover:scale-105 duration-200 rounded-lg text-sm p-1.5"
              data-modal-toggle="authentication-modal"
              onClick={onClick}
            >
              <svg
                aria-hidden="true"
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-3xl font-medium text-secondary text-center">
                Réserver un atelier
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <div className="bg-white p-4 border rounded shadow-lg">
                    <Calendar onChange={onChange} chosenDate={chosenDate} />
                  </div>
                  <div className="my-4 flex justify-center">
                    <button
                      onClick={() =>
                        setParticipantsNumber(
                          participantsNumber > 0 ? participantsNumber - 1 : 0
                        )
                      }
                      className="mx-8 border border-black rounded-full w-8 h-8"
                    >
                      -
                    </button>
                    <span>{participantsNumber}</span>
                    <button
                      onClick={() =>
                        setParticipantsNumber(participantsNumber + 1)
                      }
                      className="mx-8 border border-black rounded-full w-8 h-8"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-lg text-center">
                    {participantsNumber <= 1 ? "participant" : "participants"}
                  </div>
                </div>
                <div>
                  <div>
                    <input
                      type="submit"
                      className="w-full text-primary bg-[#D48166] hover:bg-gray-600 cursor-pointer focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                      value="Valider"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
