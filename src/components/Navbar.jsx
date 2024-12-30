import { useState } from "react";
import { Code, GithubIcon, Orbit, Mail } from "lucide-react";
import BackgroundMusic from "./BackgroundMusic";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Services", href: "#services" },
    { name: "Automated Mail", href: "#contact" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  function handleLinkClick(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(sectionId);
    }
  }
  return (
    <div className="customShadow z-[1000] sticky top-0 left-0 bg-[#0d0d0d]">
      <div className="nav_container">
        <div className="navName flex gap-3 items-center ml-[-25vh]">
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
                activeLink === "services" ? "bg-purple-700 rounded-xl" : ""
              }
            >
              <a href="#services" onClick={() => handleLinkClick("services")}>
                Services
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
          <>
            <BackgroundMusic />
          </>
        </div>
      </div>
      <motion.div
        className="lg:hidden z-auto cursor-pointer w-5 ml-auto mr-2"
        onClick={toggleMenu}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="w-6 h-0.5 bg-emerald-500 mb-1.5"
          variants={{
            open: { rotate: 45, y: 6 },
            closed: { rotate: 0, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-0.5 bg-emerald-500 mb-1.5"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-0.5 bg-emerald-500"
          variants={{
            open: { rotate: -45, y: -6 },
            closed: { rotate: 0, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="text-2xl mb-6 cursor-pointer hover:text-emerald-500 transition-colors"
                custom={index}
              >
                <a
                  href={item.href}
                  className="text-white hover:text-mainColour transition-colors duration-200"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
