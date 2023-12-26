import React from "react";
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer text-white font-bold rounded-lg">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon  ">
        <li className="transform hover:-translate-y-3 transition duration-300 ml-7 text-3xl hover:text-lime-300 ">
          <a href="ab">
            <FaLinkedin />
          </a>
        </li>
        <li className="transform hover:-translate-y-3 transition duration-300 ml-7 text-3xl hover:text-rose-800">
          <a href="cd">
            <FaGithub />
          </a>
        </li>
        <li className="transform hover:-translate-y-3 transition duration-300 ml-7 text-3xl hover:text-blue-700">
          <a href="ef">
            <FaFacebookF />
          </a>
        </li>
        <li className="transform hover:-translate-y-3 transition duration-300 ml-7 text-3xl hover:text-rose-900">
          <a href="gh">
            <FaXTwitter />
          </a>
        </li>
      </ul>
      <ul className="menu flex mt-4 mb-4 italic ">
        <a href="reportcrime" className="ml-16 hover:text-stone-200">
          Report crime
        </a>
        <a href="/casefiles" className="ml-16 hover:text-stone-200">
          File Case
        </a>
        <a href="/findalawywer" className="ml-16 hover:text-stone-200">
          Find a Lawyer
        </a>
      </ul>
      <p>
        <span className="text-green-300 mr-2">©2023</span>{" "}
        <span className="text-rose-300 mr-3">Adnan Jumbe</span>{" "}
        <span className="mr-3 text-orange-600">|| </span>All rights Served
      </p>
    </footer>
  );
}
