import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Music4 } from "lucide-react";
import bgM from "../images/music/bgM.mp3";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    if (showTooltip) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showTooltip]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    setShowTooltip(false);
  };

  return (
    <div className="ml-5 -mr-5 mt-[10px] z-50">
      <ReactPlayer
        url={bgM}
        playing={isPlaying}
        loop={true}
        volume={0.5}
        width="0"
        height="0"
      />
      <button
        onClick={togglePlay}
        className={`size-5 flex items-center justify-center rounded-full transition-colors duration-300 ${
          isPlaying ? "bg-green-500 text-white" : "bg-white text-black"
        }`}
        style={{
          all: "unset",
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          transition: "background-color 0.3s ease",
          backgroundColor: isPlaying ? "green" : "white",
          color: isPlaying ? "white" : "black",
          border: isPlaying ? "2px solid green" : "2px solid #ccc",
          cursor: "pointer",
        }}
      >
        <Music4 className="w-6 h-6" />
      </button>
      {showTooltip && (
        <div
          className="fixed pointer-events-none text-sm bg-black text-white px-2 py-1 rounded"
          style={{
            top: mousePosition.y + 20,
            left: mousePosition.x + 20,
          }}
        >
          Tap on Music
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;
