import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full home shadow bg-stone-300 rounded-lg">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <h1 className="styledfont text-2xl text-cyan-700 font-bold hover:text-blue-700 active:scale-90">
                  Crime_sourcing
                </h1>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Collapsible menu */}
          <div
            className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <ul className="text-green-700 text-1xl items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 mr-80">
                <li className="hover:text-blue-500">
                  <NavLink to="/reportcrime">Report crime</NavLink>
                </li>
                <li className="hover:text-blue-500">
                  <NavLink to="/casefiles">File Case</NavLink>
                </li>
                <li className="hover:text-blue-500">
                  <NavLink to="/findalawywer!?">Find a Lawyer</NavLink>
                </li>
              </ul>
              <div className="mt-4 md:mt-0 md:ml-8">
                <button className="btn rounded-lg py-1 px-3 bg-cyan-700 text-white hover:text-cyan-900 hover:scale-105 hover:bg-green-400 active:scale-90 md:text-left">
                  <NavLink to="/login">Get started</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
