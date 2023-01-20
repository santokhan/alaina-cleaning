import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../logo/Logo";

export default function Navbar({ children }) {
  const [dropdown, setdropdown] = useState(false);
  function handleDropdown() {
    setdropdown(!dropdown);
  }

  return (
    <nav className="w-full border-gray-200 h-14">
      <div className="h-full flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <Logo />
        <div className="flex items-center xl:order-2">
          <Link
            to="/appointments"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-full text-base px-4 py-2 xl:px-5 xl:py-2.5 mr-1 xl:mr-2 focus:outline-none capitalize shadow-xl"
          >
            Book Online
          </Link>
          <button
            onClick={handleDropdown}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-base text-green-700 rounded-lg xl:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              aria-hidden="true"
              className="w-6 h-6"
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
          {dropdown ? (
            <div className="absolute right-0 top-full bg-white w-full h-screen">
              <ul className="flex flex-col mt-4 font-medium xl:flex-row xl:space-x-8 xl:mt-0">
                <DDLink to="/#home">home</DDLink>
                <DDLink to="/#about">about</DDLink>
                <DDLink to="/#massages">massages</DDLink>
                <DDLink to="/#jan-morks">jan morks</DDLink>
                <DDLink to="/#contact">contact</DDLink>
                {/* <DDItem to="/gastenboek">gastenboek </DDItem> */}
                {/* <DDItem to="/young living">young living</DDItem> */}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="items-center justify-between hidden w-full text-base xl:flex xl:w-auto xl:order-1">
          <ul className="flex flex-col mt-4 font-medium xl:flex-row xl:space-x-8 xl:mt-0">
            <NLink to="/#home">home</NLink>
            <NLink to="/#about">about</NLink>
            <NLink to="/#massages">massages</NLink>
            <NLink to="/#jan-morks">jan morks</NLink>
            <NLink to="/#contact">contact</NLink>
            {/* <NItem to="/gastenboek">gastenboek </NItem> */}
            {/* <NItem to="/young living">young living</NItem> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export function NItem({ children, to }) {
  const { pathname, hash } = useLocation();
  console.log({ pathname, hash });

  return (
    <li className="capitalize">
      <Link
        to={to}
        className={
          hash === to
            ? "underline underline-offset-4 decoration-2 text-green-800 transition-all ease-in duration-100"
            : "hover:underline hover:underline-offset-4 hover:decoration-2 text-gray-900 transition-all ease-in"
        }
      >
        {children}
      </Link>
    </li>
  );
}

export function NLink({ children, to }) {
  const { pathname, hash } = useLocation();

  return (
    <li className="capitalize">
      <a
        href={to}
        className={
          hash === to || pathname === to
            ? "underline underline-offset-4 decoration-2 text-green-800 transition-all ease-in duration-100"
            : "hover:underline hover:underline-offset-4 hover:decoration-2 text-gray-900 transition-all ease-in"
        }
      >
        {children}
      </a>
    </li>
  );
}
export function DDItem({ children, path }) {
  return (
    <li className="py-3 px-6 relative font-medium">
      <Link
        to={path}
        className="hover:text-red-800 hover:underline hover:underline-offset-4 hover:decoration-2 capitalize text-gray-900 transition-all ease-in"
      >
        {children}
      </Link>
    </li>
  );
}
export function DDLink({ children, to }) {
  const { pathname, hash } = useLocation();
  return (
    <li className="py-3 px-6 relative font-medium capitalize">
      <a
        href={to}
        // className="hover:text-red-800 hover:underline hover:underline-offset-4 hover:decoration-2 capitalize text-gray-900 transition-all ease-in"
        className={
          hash === to || pathname === to
            ? "underline underline-offset-4 decoration-2 text-green-800 transition-all ease-in duration-100"
            : "hover:underline hover:underline-offset-4 hover:decoration-2 text-gray-900 transition-all ease-in"
        }
      >
        {children}
      </a>
    </li>
  );
}
