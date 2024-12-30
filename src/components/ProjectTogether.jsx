import { ClipboardCopy, MessageSquareShare, Sparkle } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const CopyEmailCard = () => {
  const email = "mrkaran2k5@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email Copied! Message for Collab!");
  };

  return (
    <div className="pT_container pT_hov">
      <h2 className="text-xl mb-6">
        <Sparkle /> Do you want to start a project together ?
      </h2>
      <button onClick={handleCopy} className="pT_btn">
        <ClipboardCopy className="mr-2" /> Copy my email address
      </button>
      <a
        className="pT_btn mt-1 w-fit"
        href="https://wa.me/7889000352?text=hey!,%20Karan%20I%20want%20to%20work%20on%20a%20project%20with%20you"
        target="_blank"
      >
        <MessageSquareShare className="mr-2" />
        <span>Message on WhatsApp</span>
      </a>
    </div>
  );
};

export default CopyEmailCard;
