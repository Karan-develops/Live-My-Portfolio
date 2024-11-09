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
import mongoose from "../images/lang/mongoose.png"
import next from "../images/lang/next.jpg"
import sanity from "../images/lang/sanity.png"
import auth from "../images/lang/authjs.jpg"
import { FaDesktop } from "react-icons/fa";
import '../index.css';

const Skills = () => {
  return (
    <div
      id="skills"
      data-aos="flip-left"
      className="lg:h-[100vh] h-full w-[100%] p-10"
    >
      <h1 className="skill_heading">
        <span>
          <FaDesktop className="text-3xl text-[#817ffa]" />{" "}
        </span>{" "}
        Skills
      </h1>
      <div className="skill_container">
        <div className="skill_card">
          <img className="w-[60px] h-[60px] mt-1" src={html} />
          <h1 className="skill_name">HTML</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[60px] mt-1" src={css} />
          <h1 className="skill_name">CSS</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[60px]" src={js} />
          <h1 className="skill_t1">JAVASCRIPT</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[60px]" src={react} />
          <h1 className="skill_t1">REACT</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[60px]" src={node} />
          <h1 className="skill_t1">NODE JS</h1>
        </div>
        <div className="skill_c_shadow">
          <img className="w-[40px] h-[40px]" src={express} />
          <h1 className="skill_t1">EXPRESS JS</h1>
        </div>
        <div className="skill_c_shadow">
          <img className="w-[100px] h-[40px]" src={mg} />
          <h1 className="skill_t1">MONGO DB</h1>
        </div>
        <div className="skill_c_shadow">
          <img className="w-[50px] h-[50px]" src={redux} />
          <h1 className="skill_t1">REDUX</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[60px]" src={java} />
          <h1 className="skill_t1">JAVA</h1>
        </div>
        <div className="customSkillShadow border customShadow px-4 py-2 pb-1 flex flex-col justify-center items-center rounded-xl">
          <img className="w-[40px] h-[40px]" src={c} />
          <h1 className="skill_t1">C</h1>
        </div>
        <div className="skill_card">
          <img className="w-[50px] h-[47px] mt-2" src={git} />
          <h1 className="skill_t1">GIT</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[50px] mt-2 invert" src={cpp} />
          <h1 className="skill_t1">C++</h1>
        </div>
        <div className="skill_card">
          <img className="w-[40px] h-[40px] mt-4 rounded-full" src={github} />
          <h1 className="skill_t1">GITHUB</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[50px] mt-2" src={sql} />
          <h1 className="skill_t1">SQL</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[50px] mt-2" src={ts} />
          <h1 className="skill_t1">Tailwind</h1>
        </div>
        <div className="skill_card">
          <img className="w-[50px] h-[50px] mt-2 rounded-full" src={mongoose} />
          <h1 className="skill_t1">Mongoose</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[50px] mt-2" src={bs} />
          <h1 className="skill_t1">BootStrap</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[50px] mt-2" src={redis} />
          <h1 className="skill_t1">Redis</h1>
        </div>
        <div className="skill_card">
          <img className="w-[60px] h-[50px] mt-2 rounded-full" src={zustand} />
          <h1 className="skill_t1">Zustand</h1>
        </div>
        <div className="skill_card">
          <img className="w-[55px] h-[50px] mt-2" src={typeS} />
          <h1 className="skill_t1">TypeScript</h1>
        </div>
        <div className="skill_card">
          <img className="w-[55px] h-[50px] mt-2" src={next} />
          <h1 className="skill_t1">Next JS</h1>
        </div>
        <div className="skill_card">
          <img className="w-[55px] h-[50px] mt-2 rounded-full" src={sanity} />
          <h1 className="skill_t1">Sanity</h1>
        </div>
        <div className="skill_card">
          <img className="w-[55px] h-[50px] mt-2 rounded-full object-cover" src={auth} />
          <h1 className="skill_t1">Auth JS</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
