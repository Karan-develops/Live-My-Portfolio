import React from "react";

const MagicBtn = ({ text }: { text: string }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#1A2B3B]/20 focus:ring-offset-2 focus:ring-offset-[#E8E6E3]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1A2B3B_0%,#FF4D4D_50%,#1A2B3B_100%)]" />
      <span className="flex h-full w-full items-center justify-center rounded-full bg-[#E8E6E3] px-6 py-1 text-lg font-medium text-[#1A2B3B] backdrop-blur-3xl gap-3">
        <a
          className="font-semibold"
          href="https://wa.me/7889000352?text=hey!,%20Karan%20I%20want%20to%20work%20on%20a%20project%20with%20you"
        >
          {text}
        </a>
      </span>
    </button>
  );
};

export default MagicBtn;
