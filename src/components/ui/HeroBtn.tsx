import { ArrowUp } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const HeroBtn = () => {
  function handleClick() {
    toast.success("Tap on icons to visit my profiles ⭐");
  }
  return (
    <button
      onClick={() => handleClick()}
      className="cB animate__animated animate__bounce animate__delay-1s animate__repeat-1 bg-purple-700 px-5 py-2 text-white mt-5 flex items-center gap-1 border-none outline-none"
    >
      My Socials
      <span>
        <ArrowUp />
      </span>
    </button>
  );
};

export default HeroBtn;
