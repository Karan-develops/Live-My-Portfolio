import React from "react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { GithubIcon, Instagram, Linkedin } from "lucide-react";

const HeroLinks = () => {
  return (
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
      <a href="https://www.geeksforgeeks.org/user/mrkarall54/" target="_blank">
        <SiGeeksforgeeks className="text-[#40c064] text-2xl" />
      </a>
      <a href="https://www.instagram.com/karan_aggarwal_00/" target="_blank">
        <Instagram className="text-[#d14525] text-2xl" />
      </a>
    </div>
  );
};

export default HeroLinks;
