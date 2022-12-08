import { useState, useContext } from "react";
import { Link } from "react-scroll";

import { logout } from "@services/api";

import { LoginContext } from "@contexts/LoginContextProvider";
// import BookingModal from "../components/BookingModal";

export default function Navbar({ handleLoginClick }) {
  const { currentUser, setCurrentUser } = useContext(LoginContext);
  const [isShownMobileMenu, setIsShownMobileMenu] = useState(false);
  const [isShownBookingForm, setIsShownBookingForm] = useState(false);

  const handleClick = () => {
    setIsShownMobileMenu(!isShownMobileMenu);
  };

  const onLogout = async () => {
    setCurrentUser(await logout());
    window.location.reload(false);
  };

  const handleAdminClick = () => {
    handleLoginClick();
  };

  // const handleBookingClick = () => {
  //   setIsShownBookingForm(!isShownBookingForm);
  // };

  return (
    <div>
      <nav className="px-4 sm:px-4 rounded">
        <div className="text-right pt-12">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="bg-[#1F2411] mt-4 mr-3 text-sm text-slate-200 rounded-lg border-[3px] border-[#1F2411] md:hidden focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleClick}
          >
            <svg
              className="w-14 h-14"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex justify-end md:justify-between">
          <div className={isShownMobileMenu ? "flex" : "hidden md:flex"}>
            <div className="md:flex md:justify-center">
              <ul className="backdrop-blur-md flex flex-col pr-4 w-80 rounded-lg md:bg-[#1F2411] md:flex-row md:w-auto md:space-x-8 md:text-lg md:font-medium md:border-0 lg:text-2xl">
                {!currentUser && (
                  <div className="">
                    <a
                      href="#"
                      className="h-16 text-center block border-x-[3px] border-t-[3px] border-[#1F2411] py-3 pl-3 text-slate-100 rounded hover:bg-[#1F2411] md:border-0 md:px-8 hover:text-slate-600"
                      onClick={handleAdminClick}
                    >
                      <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    </a>
                  </div>
                )}
                {currentUser ? (
                  <a
                    href="#"
                    className="text-red-400 w-36 h-16 text-center block border-x-[3px] border-t-[3px] border-[#1F2411] py-3 text-slate-100 rounded hover:bg-[#1F2411] md:border-0 md:px-4 hover:text-slate-600"
                    onClick={onLogout}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <span className="ml-4 text-sm mr-[-40px]">Marion</span>
                  </a>
                ) : (
                  " "
                )}
                <li>
                  <a
                    href="#"
                    className="h-16 text-center block border-x-[3px] border-t-[3px] border-[#1F2411] py-3 pr-4 pl-3 text-slate-100 rounded hover:bg-[#1F2411] md:border-0 md:px-8"
                  >
                    Home
                  </a>
                </li>
                <Link
                  className="cursor-pointer"
                  to="about"
                  spy={true}
                  smooth={true}
                >
                  <li>
                    <a
                      href="#"
                      className="h-16 text-center block border-x-[3px] border-t-[3px] border-[#1F2411] py-3 pr-4 pl-3 text-slate-100 rounded hover:bg-[#1F2411] md:border-0 md:px-8"
                    >
                      A propos
                    </a>
                  </li>
                </Link>

                <Link
                  className="cursor-pointer"
                  to="workshops"
                  spy={true}
                  smooth={true}
                >
                  <li>
                    <a
                      href="#"
                      className="h-16 text-center block border-x-[3px] border-t-[3px] border-[#1F2411] py-3 pr-4 pl-3 text-slate-100 rounded hover:bg-[#1F2411] md:border-0 md:px-8"
                    >
                      Ateliers
                    </a>
                  </li>
                </Link>

                <Link
                  className="cursor-pointer"
                  to="blog"
                  spy={true}
                  smooth={true}
                >
                  <li>
                    <a
                      href="#"
                      className="h-16 text-center block border-x-[3px] border-t-[3px] border-[#1F2411] py-3 pr-4 pl-3 text-slate-100 rounded hover:bg-[#1F2411] md:border-0 md:px-8"
                    >
                      Blog
                    </a>
                  </li>
                </Link>

                <Link
                  className="cursor-pointer text-center"
                  to="contact"
                  spy={true}
                  smooth={true}
                >
                  <li>
                    <a
                      href="#"
                      className="h-16 text-center block border-[3px] border-[#1F2411] py-3 pr-4 pl-3 text-slate-100 rounded hover:bg-[#1F2411] md:border-0 md:px-8"
                      aria-current="page"
                    >
                      Contact
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h1 className="w-fit backdrop-blur-sm text-5xl text-slate-300 mt-[20%] ml-[55%] md:text-6xl md:mt-[10%] md:ml-[15%]">
          Energies cosmiques
        </h1>
        <div className="text-2xl mt-10 ml-[55%] md:ml-[20%]">
          <Link
            className="cursor-pointer text-center bg-primary"
            to="workshops"
            spy={true}
            smooth={true}
          >
            <button
              // onClick={handleBookingClick}
              className="text-white font-light bg-[#D7BFA8] border border-[#A4978F] rounded-lg py-3 px-6"
            >
              {" "}
              Réserver un atelier{" "}
            </button>
          </Link>
          {/* {isShownBookingForm ? (
            <BookingModal onClick={handleBookingClick} />
          ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
  );
}
