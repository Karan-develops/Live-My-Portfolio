import React from "react";
import js from "../images/lang/js.png";
import html from "../images/lang/html.png";
import css from "../images/lang/css.png";
import java from "../images/lang/java.png";
import github from "../images/lang/gitHub.jpg";
import ts from "../images/lang/ts.png";
import react from "../assets/react.svg";
import express from "../images/lang/ex.png";
import mg from "../images/lang/mongodb.png";
import node from "../images/lang/node.png";
import sql from "../images/lang/sql.png";
import bs from "../images/lang/bs.png";
import c from "../images/lang/c.png";
import redux from "../images/lang/redux.png";
import git from "../images/lang/git.png";
import cpp from "../images/lang/cpp.png";
import redis from "../images/lang/redis.png";
import typeS from "../images/lang/typeS.png";
import zustand from "../images/lang/zustand.jpg";
import { FaDesktop } from "react-icons/fa";
import "F:/Web dev/PORTFOLIO/src/index.css";

const Skills = () => {
  return (
    <div
      id="skills"
      data-aos="flip-left"
      className="lg:h-[100vh] h-full w-[100%] p-10"
    >
      <h1 className="font-bold text-gray-200 text-4xl text-center flex justify-center items-center gap-3">
        <span>
          <FaDesktop className="text-3xl text-[#817ffa]" />{" "}
        </span>{" "}
        Skills
      </h1>
      <div className="flex justify-center mt-7 sm:w-[70%] w-full mx-auto  gap-4 flex-wrap  bg-[rgba(0,0,0,0.9)] p-10 rounded-2xl">
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px] mt-1" src={html} />
          <h1 className="text-white font-bold mt-1">HTML</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px] mt-1" src={css} />
          <h1 className="text-white font-bold mt-1">CSS</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={js} />
          <h1 className="text-white font-bold mt-2">JAVASCRIPT</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={react} />
          <h1 className="text-white font-bold mt-2">REACT</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={node} />
          <h1 className="text-white font-bold mt-2">NODE JS</h1>
        </div>
        <div className="border customShadow px-4  flex flex-col items-center justify-center rounded-xl">
          <img className="w-[40px] h-[40px]" src={express} />
          <h1 className="text-white font-bold mt-2">EXPRESS JS</h1>
        </div>
        <div className="border customShadow px-4  flex flex-col items-center justify-center rounded-xl">
          <img className="w-[100px] h-[40px]" src={mg} />
          <h1 className="text-white font-bold mt-2">MONGO DB</h1>
        </div>
        <div className="border customShadow px-4  flex flex-col items-center justify-center rounded-xl">
          <img className="w-[50px] h-[50px]" src={redux} />
          <h1 className="text-white font-bold mt-2">REDUX</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={java} />
          <h1 className="text-white font-bold mt-2">JAVA</h1>
        </div>
        <div className="border customShadow px-4 py-2 pb-1 flex flex-col justify-center items-center rounded-xl">
          <img className="w-[40px] h-[40px]" src={c} />
          <h1 className="text-white font-bold mt-2">C</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[60px]" src={git} />
          <h1 className="text-white font-bold mt-2">GIT</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[50px] mt-2 invert" src={cpp} />
          <h1 className="text-white font-bold mt-2">C++</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[40px] h-[40px] mt-4" src={github} />
          <h1 className="text-white font-bold mt-2">GITHUB</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[50px] mt-2" src={sql} />
          <h1 className="text-white font-bold mt-2">SQL</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[50px] mt-2" src={ts} />
          <h1 className="text-white font-bold mt-2">Tailwind</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[50px] mt-2" src={bs} />
          <h1 className="text-white font-bold mt-2">BootStrap</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[50px] mt-2" src={redis} />
          <h1 className="text-white font-bold mt-2">Redis</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[60px] h-[50px] mt-2" src={zustand} />
          <h1 className="text-white font-bold mt-2">Zustand</h1>
        </div>
        <div className="border customShadow px-4 pb-1 flex flex-col items-center rounded-xl">
          <img className="w-[55px] h-[50px] mt-2" src={typeS} />
          <h1 className="text-white font-bold mt-2">TypeScript</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
