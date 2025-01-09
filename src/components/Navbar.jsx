import { useEffect, useState } from "react";
import { Code, GithubIcon, Orbit, Mail } from "lucide-react";
import BackgroundMusic from "./BackgroundMusic";
import { motion, AnimatePresence } from "framer-motion";
import {WebsiteLoader} from "../components/ui/Loader";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

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

  useEffect(() => {
    setMounted(true)
  }, [mounted])
  

  return (
    <div className="customShadow z-[1000] sticky top-0 left-0 bg-[#0d0d0d]">
      <WebsiteLoader mounted={mounted}/>
      <div className="nav_container">
        <div className="navName flex gap-3 items-center ml-[-5vh] lg:ml-[-25vh]">
          <Orbit className="text-emerald-500 text-5xl" />
          <h1 className=" text-emerald-500 text-[28px] font-bold">
            Karan <span className="text-[#c9d3fc]">Aggarwal</span>
          </h1>
          <Code className="cA text-emerald-500  text-5xl" />
        </div>

        <div className=" lg:flex hidden cursor-pointer">
          <ul className="flex gap-3 list">
            {links.map((link) => (
              <li
                key={link.id}
                className={
                  activeLink === link.id ? "bg-purple-700 rounded-xl" : ""
                }
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
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
        className="lg:hidden z-50 cursor-pointer w-5 ml-auto mr-2"
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
            className="inset-0 flex flex-col items-center justify-center"
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
