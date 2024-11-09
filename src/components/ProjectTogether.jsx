import { ClipboardCopy, Sparkle } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const CopyEmailCard = () => {
  const email = "mrkaran2k5@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email Copied! Message for Collab!")
  };

  return (
    <div className="pT_container pT_hov">
      <h2 className="text-xl mb-6">
        <Sparkle /> Do you want to start a project together ?
      </h2>
      <button onClick={handleCopy} className="pT_btn">
        <ClipboardCopy className="mr-2" /> Copy my email address
      </button>
    </div>
  );
};

export default CopyEmailCard;
