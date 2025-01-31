import { Mail } from "lucide-react";
import React from "react";

const EmailBtn = () => {
  return (
    <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#1A2B3B]/20 focus:ring-offset-2 focus:ring-offset-[#E8E6E3] mr-8">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1A2B3B_0%,#FF4D4D_50%,#1A2B3B_100%)]" />
      <span className="flex h-full w-full items-center justify-center rounded-full bg-[#E8E6E3] px-4 py-1 text-sm font-medium text-[#1A2B3B] backdrop-blur-3xl">
        <a
          href="mailto:mrkaran2k5@gmail.com"
          className="flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Email Me
        </a>
      </span>
    </button>
  );
};

export default EmailBtn;
