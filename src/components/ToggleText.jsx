import { useState, useEffect } from "react";
import "../toggling.css";

const TogglingText = () => {
  const texts = [
    "Student",
    "Developer",
    "Problem Solver",
    "Gaming",
    "Lifelong Learner",
    "Tech Enthusiast",
    "Loves Music",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(true);
      }, 500);
    }, 2800);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div className="text-container">
      <p
        className={`toggleSmall toggling-text ${
          isAnimating ? "slide-in" : "slide-out"
        } text-emerald-400 text-4xl`}
      >
        {texts[currentTextIndex]}
      </p>
    </div>
  );
};

export default TogglingText;
