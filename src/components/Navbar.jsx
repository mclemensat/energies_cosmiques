import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isShownMobileMenu, setIsShownMobileMenu] = useState(false);

  const handleClick = () => {
    setIsShownMobileMenu(!isShownMobileMenu);
  };

  return (
    <nav className="px-4 sm:px-4 rounded">
      <div className="text-right pt-12">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="mt-4 mr-3 text-sm text-neutral-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
      <div className="flex justify-between">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
        </a>
        <div className={isShownMobileMenu ? "flex" : "hidden md:flex"}>
          <div className="md:flex md:w-full md:justify-center md:mt-20">
            <ul className="flex flex-col pr-4 w-56 text-2xl rounded-lg md:flex-row md:w-auto md:space-x-8 md:text-lg md:font-medium md:border-0 lg:text-2xl">
              <li>
                <a
                  href="#"
                  className="block bg-gray-100 border border-black py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:bg-transparent md:border-0 md:hover:text-blue-700 md:px-8"
                >
                  Home
                </a>
              </li>
              <Link
                className="cursor-pointer text-center bg-primary"
                to="about"
                spy={true}
                smooth={true}
              >
                <li>
                  <a
                    href="#"
                    className="block bg-gray-100 border border-black py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:bg-transparent md:border-0 md:hover:text-blue-700 md:px-8"
                  >
                    A propos
                  </a>
                </li>
              </Link>

              <Link
                className="cursor-pointer text-center bg-primary"
                to="workshops"
                spy={true}
                smooth={true}
              >
                <li>
                  <a
                    href="#"
                    className="block bg-gray-100 border border-black py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:bg-transparent md:border-0 md:hover:text-blue-700 md:px-8"
                  >
                    Ateliers
                  </a>
                </li>
              </Link>

              <Link
                className="cursor-pointer text-center bg-primary"
                to="blog"
                spy={true}
                smooth={true}
              >
                <li>
                  <a
                    href="#"
                    className="block bg-gray-100 border border-black py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:bg-transparent md:border-0 md:hover:text-blue-700 md:px-8"
                  >
                    Blog
                  </a>
                </li>
              </Link>

              <Link
                className="cursor-pointer text-center bg-primary"
                to="contact"
                spy={true}
                smooth={true}
              >
                <li>
                  <a
                    href="#"
                    className="block bg-gray-100 border border-black py-2 pr-4 pl-3 rounded md:bg-transparent md:text-gray-100 md:px-8"
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
  );
}
