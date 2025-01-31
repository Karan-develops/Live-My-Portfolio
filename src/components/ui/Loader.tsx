import React, { useEffect, useState } from "react";

export function WebsiteLoader({ mounted }: { mounted: boolean }): JSX.Element {
  const [delayedMounted, setDelayedMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => setDelayedMounted(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  const boxes: { color: string }[] = [
    { color: "bg-purple-500" },
    { color: "bg-orange-500" },
    { color: "bg-blue-500" },
    { color: "bg-pink-500" },
  ];

  return (
    <div
      className={`loader-container flex items-center justify-center duration-[2000ms] transition-all ${
        delayedMounted
          ? "-z-10 transform -translate-y-1/2 -translate-x-1/2 opacity-40 fixed size-[176px]"
          : "transform translate-y-0 fixed z-20 backdrop-blur-md w-dvw h-dvh"
      }`}
    >
      <div
        className={`loader-wrapper flex flex-col gap-6 items-center justify-center flex-wrap w-fit h-fit`}
      >
        <div className="boxes-wrapper grid grid-cols-2 grid-rows-2 animate-rotate">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`box-rotating ${box.color} w-20 h-20 opacity-80`}
            />
          ))}
        </div>
        {!delayedMounted && (
          <div className="text font-mono dark:text-yellow-500 text-green-900 font-bold text-center text-wrap">
            Just a moment buddy...
          </div>
        )}
      </div>
    </div>
  );
}
