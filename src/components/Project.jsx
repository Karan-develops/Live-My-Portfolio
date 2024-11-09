import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import ProjectCard from "./ProjectCard";
import chatApp from "../images/projects/chatApp.png";
import ecommerce from "../images/projects/ec.png";
import sumz from "../images/projects/Sumz.png";
import pitch from "../images/projects/ps.png";
import {
  GithubIcon,
  MessageCircleCodeIcon,
  Sigma,
  Waypoints,
} from "lucide-react";
import { BiStore } from "react-icons/bi";

const Project = () => {
  return (
    <div id="project" className="text-white mt-10">
      <h1
        data-aos="fade-up-right"
        className="lg:text-4xl text-3xl flex justify-center items-center gap-6 font-bold my-10"
      >
        <span className="text-5xl text-[#817ffa]">
          <AiOutlineFundProjectionScreen />
        </span>
        My Projects
      </h1>
      <div className="project_card_container">
        {/* Project-1 */}
        <div data-aos="zoom-in-up" className="project_card_div">
          <div className="rounded-2xl">
            <img className="project_card_img" src={chatApp} alt="P1" />
            <div className="project_card_textContainer">
              <h1 className="project_card_heading">
                <MessageCircleCodeIcon className="text-cyan-400 mr-1 -mt-1 size-7" />
                Real-Time Chat App (Socket - IO)
              </h1>
              <p className="project_card_deployed">Deployed ✅</p>
              <div className="project_card_links project-description">
                <div className="flex">
                  <a
                    href="https://chat-verse-karan.onrender.com"
                    target="_blank"
                  >
                    <button className="project_card_liveBtn">Live Url</button>
                  </a>
                  <div className="project_card_gitHubBtnP">
                    <a
                      href="https://github.com/Karan-develops/MERN-ChatApp-Deployed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="project_card_gitIcon" />
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <ProjectCard
                    projectDescription="Developed a responsive, full-stack chat application with real-time messaging using modern web technologies. Implemented features such as user authentication, message storage, and seamless deployment on Render."
                    tech="Technologies Used:- Node JS, Mongo DB, Express,JWT,Socket.io"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project-2 */}
        <div data-aos="zoom-in-up" className="project_card_div">
          <div className="rounded-2xl">
            <img className="project_card_img" src={ecommerce} alt="P2" />
            <div className="project_card_textContainer">
              <h1 className="project_card_heading">
                <BiStore className="text-green-500 mr-1 -mt-1 text-2xl" />
                <span className="-mt-[3px]">Full Stack E-Comm. Store</span>
              </h1>
              <p className="project_card_deployed mt-[2px]">Deployed ✅</p>
              <div className="project_card_links project-description">
                <div>
                  <a
                    href="https://karan-ecommerce.onrender.com"
                    target="_blank"
                  >
                    <button className="project_card_liveBtn">Live Url</button>
                  </a>
                </div>
                <div className="flex justify-center items-center mr-3">
                  <a
                    href="https://github.com/Karan-develops/E-Commerce-Deployed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out text-lg hover:cursor-pointer ml-5 mt-3" />
                  </a>
                </div>

                <div className="mt-2">
                  <ProjectCard
                    projectDescription={[
                      "• This is a full stack e-commerce that fully functional user can create an account via email and add items to cart.",
                      "Admins can track the sales analytics and much more.",
                      "• MongoDB , Redis && Cloudinary Integration.",
                      "• Authentication System JWT with Refresh/Access Tokens.",
                      "• User Signup & Login.",
                      "• Admin Dashboard with Sales Analytics.",
                      "• Create real-time products with pics on Cloudinary.",
                    ].map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                    tech="Technologies Used:- MERN, Recharts (Analytics) , Zustand,Postman, MongoDB Atlas, render, cloudinary, upstash redis."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project-3 */}
        <div data-aos="zoom-in-up" className="project_card_div">
          <div className="rounded-2xl">
            <img className="project_card_img" src={pitch} alt="P2" />
            <div className="project_card_textContainer">
              <h1 className="project_card_heading">
                <Waypoints className="text-purple-400 mr-1 -mt-1 size-7" />
                <span className="-mt-[3px]">
                  NextJS - Startup pitching platform
                </span>
              </h1>
              <p className="project_card_deployed">Deployed ✅</p>
              <div className="project_card_links project-description">
                <div>
                  <a href="https://karan-startup.vercel.app" target="_blank">
                    <button className="project_card_liveBtn">Live Url</button>
                  </a>
                </div>
                <div className="flex justify-center items-center mr-3">
                  <a
                    href="https://github.com/Karan-develops/Live-Startup-pitch-sync"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="project_card_gitIcon" />
                  </a>
                </div>
                <div className="mt-2">
                  <ProjectCard
                    projectDescription={[
                      "This project showcases the latest features of Next.js 15, including Next.js Form for seamless client-side form submissions, Unstable After for background tasks, Server Component HMR Cache for faster development, and Partial Prerendering for performance optimization.",
                    ].map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                    tech="Technologies Used:- React 19, Next.js 15, Sanity, TailwindCSS, ShadCN, TypeScript."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project-4 */}
        <div data-aos="zoom-in-up" className="project_card_div">
          <div className="rounded-2xl  ">
            <img src={sumz} className="project_card_img" alt="P4" />
            <div className="project_card_textContainer">
              <h1 className="project_card_heading">
                <Sigma className="text-orange-500" />
                Sumz - AI
              </h1>
              <p className="project_card_deployed">Deployed ✅</p>
              <div className="project_card_links project-description">
                <div>
                  <a href="https://karan-sumz.netlify.app/" target="_blank">
                    <button className="p-[8px] mt-[7px] bg-green-600 text-white outline-none ">
                      Live Url
                    </button>
                  </a>
                </div>
                <div className="flex justify-center items-center mr-3">
                  <a
                    href="https://github.com/Karan-develops/Sumz-AI-WebApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out text-lg hover:cursor-pointer ml-3 mt-3" />
                  </a>
                </div>
                <div className="mt-2">
                  <ProjectCard
                    projectDescription="Summarize any kind of article with just one click using the powerful OpenAI model."
                    tech="Technologies Used:- MERN, RapidApi (for api) , React-Redux, netlify."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project-5 */}
        <div data-aos="zoom-in-up" className="project_card_div">
          <div className="rounded-2xl  ">
            {/* <img
              className="project_card_img"
              alt="P5"
            /> */}
            <h1 className="flex justify-center w-[100%] sm:h-[200px]  h-[150px] text-xl">
              Coming Soon
            </h1>
            <div className="project_card_textContainer">
              <h1 className="project_card_heading">--</h1>
              <p className="text-yellow-500 text-sm">In Progress🔰</p>
              <div className="flex gap-2 project-description justify-between flex-wrap">
                <div>
                  <a href="" target="_blank">
                    <button className="project_card_liveBtn">Live Url</button>
                  </a>
                </div>
                <div className="flex justify-center items-center mr-3">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="project_card_gitIcon" />
                  </a>
                </div>
                <div className="mt-2">
                  <ProjectCard projectDescription="Coming Soon" tech="Soon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
