import React from "react";
import { TypeAnimation } from "react-type-animation";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import heroImg from "../images/heroImg.svg";
import { ArrowUp, GithubIcon, Instagram, Linkedin } from "lucide-react";
import TogglingText from "./ToggleText";
import toast from "react-hot-toast";

const BannerParticles = () => {
  function handleClick() {
    toast.success("Tap on icons to visit my profiles ⭐");
  }
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
        <TogglingText />
      </div>
      <div className="banner h-full z-10 relative">
        {" "}
        <div className="bannerCustom flex items-center ml-16 sm:flex-row flex-col md:justify-around h-full">
          <div className="lg:flex-0.7 sm:w-[60%] w-full sm:p-10">
            <h1 className="sm:text-3xl text-lg font-bold">Hi There,</h1>
            <h1 className="md:text-4xl text-2xl">
              I'm{" "}
              <span className="text-[#e3662c] font-extrabold">
                Karan Aggarwal
              </span>
            </h1>

            <div className="flex items-center w-full gap-2">
              <h1 className="sm:text-2xl text-xl">I am into </h1>
              <TypeAnimation
                sequence={[
                  "Mern Stack",
                  1000,
                  "Backend Development",
                  1000,
                  "Problem Solving",
                  1000,
                  "Web Development",
                  1000,
                ]}
                wrapper="span"
                speed={200}
                style={{
                  display: "inline-block",
                  color: "#bea6ff",
                  fontWeight: "bold",
                }}
                repeat={Infinity}
                className="typing-text-large"
              />
            </div>
            <div className="flex gap-4 my-4 cursor-pointer w-min">
              <a
                href="https://www.linkedin.com/in/karan-aggarwal-50a12b2b9"
                target="_blank"
              >
                <Linkedin className="text-[#0072b1] text-2xl" />
              </a>
              <a href="https://leetcode.com/u/Karan_Aggarwal/" target="_blank">
                <SiLeetcode className="text-[#d87607] text-2xl" />
              </a>
              <a href="https://github.com/Karan-develops" target="_blank">
                <GithubIcon className="text-[#fff] text-2xl" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/mrkarall54/"
                target="_blank"
              >
                <SiGeeksforgeeks className="text-[#40c064] text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/karan_aggarwal_00/"
                target="_blank"
              >
                <Instagram className="text-[#d14525] text-2xl" />
              </a>
            </div>

            <button
              onClick={() => handleClick()}
              className="cB animate__animated animate__bounce animate__delay-1s animate__repeat-1 bg-purple-700 px-5 py-2 text-white mt-5 flex items-center gap-1 border-none outline-none"
            >
              My Socials
              <span>
                <ArrowUp />
              </span>
            </button>
          </div>
          <img src={heroImg} className="h-[38vh] animate-float mr-12" />
        </div>
      </div>
    </div>
  );
};

export default BannerParticles;
