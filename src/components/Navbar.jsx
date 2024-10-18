import React, { useState } from "react";
import { Code, GithubIcon, Orbit, Mail } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  function handleLinkClick(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(sectionId);
    }
  }
  return (
    <div className="customShadow z-[1000] sticky top-0 left-0 bg-[#0d0d0d]">
      <div className="flex justify-between items-center p-2 text-white max-w-[1200px] w-[100%] ml-auto mr-12  ">
        <div className=" navName flex gap-3 items-center ml-[-25vh]">
          <Orbit className="text-emerald-500  text-5xl" />
          <h1 className=" text-emerald-500 text-[28px] font-bold">
            Karan <span className="text-[#c9d3fc] ">Aggarwal</span>
          </h1>
          <Code className="cA text-emerald-500  text-5xl" />
        </div>

        <div className=" lg:flex hidden cursor-pointer">
          <ul className="flex gap-3 list">
            <li
              className={
                activeLink === "home" ? "bg-purple-700 rounded-xl" : ""
              }
            >
              <a href="#home" onClick={() => handleLinkClick("home")}>
                Home
              </a>
            </li>
            <li
              className={
                activeLink === "about" ? "bg-purple-700 rounded-xl" : ""
              }
            >
              <a href="#about" onClick={() => handleLinkClick("about")}>
                About
              </a>
            </li>
            <li
              className={
                activeLink === "project" ? "bg-purple-700 rounded-xl" : ""
              }
            >
              <a href="#project" onClick={() => handleLinkClick("project")}>
                Projects
              </a>
            </li>
            <li
              className={
                activeLink === "education" ? "bg-purple-700 rounded-xl" : ""
              }
            >
              <a href="#education" onClick={() => handleLinkClick("education")}>
                Education
              </a>
            </li>
            <li
              className={
                activeLink === "skills" ? "bg-purple-700 rounded-xl" : ""
              }
            >
              <a href="#skills" onClick={() => handleLinkClick("skills")}>
                Skills
              </a>
            </li>
            <li
              className={
                activeLink === "contact" ? "bg-purple-700 rounded-xl" : ""
              }
            >
              <a href="#contact" onClick={() => handleLinkClick("contact")}>
                Contact
              </a>
            </li>
          </ul>
          <>
            <a
              href="https://github.com/Karan-develops"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out text-lg hover:cursor-pointer ml-5 mt-3" />
            </a>
          </>
          <>
            <a href="#contact">
              <Mail className="relative group text-gray-300 hover:text-red-400 transition duration-300 ease-in-out text-lg hover:cursor-pointer ml-5 mt-3" />
            </a>
          </>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
