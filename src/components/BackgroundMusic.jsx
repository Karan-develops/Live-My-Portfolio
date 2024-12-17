import { Music4 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const audioRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showTooltip]);

  const togglePlay = async () => {
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error with play/pause:", error);
    }
  };

  return (
    <div className="ml-5 -mr-5 mt-[10px] z-50">
      <audio ref={audioRef} loop>
        <source src="src/images/music/bgM.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
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
        {isPlaying ? (
          <Music4 className="w-6 h-6" />
        ) : (
          <Music4 className="w-6 h-6" />
        )}
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
