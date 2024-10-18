import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import ProjectCard from "./ProjectCard";
import chatApp from "../images/projects/chatApp.png";
import ecommerce from "../images/projects/ecommerce.png";
import sumz from "../images/projects/sumz.png";
import { GithubIcon, MessageCircleCodeIcon, Sigma } from "lucide-react";
import { BiStore } from "react-icons/bi";

const Project = () => {
  return (
    <div id="project" className="text-white mt-10">
      <h1
        data-aos="fade-up-right"
        className="lg:text-4xl text-3xl flex justify-center items-center gap-6 font-bold my-10"
      >
        {" "}
        <span className="text-5xl text-[#817ffa]">
          <AiOutlineFundProjectionScreen />
        </span>{" "}
        My Projects
      </h1>
      <div className="flex  bg-[rgba(0,0,0,0.9)] sm:p-10 p-5 gap-7 flex-wrap justify-center rounded-xl">
        {/* Project-1 */}
        <div
          data-aos="zoom-in-up"
          className=" lg:w-[25%] lg:h-[360px] sm:w-[50%] md:w-[40%] w-[80%] bg-gray-900  projectShadow sm:h-[100%] rounded-lg p-2"
        >
          <div className="rounded-2xl">
            <img
              className="w-[100%] sm:h-[200px] h-[150px] rounded-2xl object-cover"
              src={chatApp}
            />

            <div className="bg-[#2d434c] p-5  h-[100%] lg:h-[120px] mt-4 rounded-lg ">
              <h1 className="flex font-bold text-white mt-3 font-serif">
                {" "}
                <MessageCircleCodeIcon className="text-cyan-400 mr-1 text-xl" />
                Real-Time Chat App
              </h1>
              <p className="text-emerald-400 text-sm mb-3">Deployed ✅</p>
              <div className="flex gap-2 project-description  justify-between flex-wrap">
                <div className="flex">
                  <a
                    href="https://chat-verse-karan.onrender.com"
                    target="_blank"
                  >
                    <button className="p-[8px] mt-[7px] bg-green-600 text-white outline-none ">
                      Live Url
                    </button>
                  </a>
                  <div className="flex justify-center items-center ml-1">
                    <a
                      href="https://github.com/Karan-develops/MERN-ChatApp-Deployed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out text-lg hover:cursor-pointer ml-5 mt-3" />
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
        <div
          data-aos="zoom-in-up"
          className=" lg:w-[25%] lg:h-[360px] sm:w-[50%] md:w-[40%] w-[80%] bg-gray-900  projectShadow sm:h-[100%] rounded-lg p-2 "
        >
          <div className="rounded-2xl">
            <img
              className="w-[100%] sm:h-[200px] h-[150px] rounded-2xl object-cover"
              src={ecommerce}
            />
            <div className="bg-[#2d434c] p-5  h-[100%] lg:h-[120px] mt-4 rounded-lg ">
              <h1 className="flex font-bold text-white mt-3 font-serif">
                {" "}
                <BiStore className="text-green-500 mr-1 text-xl" />
                E-Commerce Store
              </h1>
              <p className="text-emerald-400 text-sm mb-3">Deployed ✅</p>
              <div className="flex gap-2 project-description  justify-between flex-wrap">
                <div>
                  <a
                    href="https://karan-ecommerce.onrender.com"
                    target="_blank"
                  >
                    <button className="p-[8px] mt-[7px] bg-green-600 text-white outline-none ">
                      Live Url
                    </button>
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
        <div
          data-aos="zoom-in-up"
          className=" lg:w-[25%] lg:h-[360px]  sm:w-[50%] md:w-[40%] w-[80%] bg-gray-900  projectShadow sm:h-[350px] rounded-lg p-2 "
        >
          <div className="rounded-2xl  ">
            <img
              src={sumz}
              className="w-[100%] sm:h-[200px] h-[150px] rounded-2xl object-cover"
              alt="COMING SOON"
            />
            <div className="bg-[#2d434c] p-5  h-[100%] lg:h-[120px] mt-4 rounded-lg ">
              <h1 className="flex font-bold text-white mt-3 font-serif">
                <Sigma className="text-orange-500" />
                Sumz
              </h1>
              <p className="text-yellow-500 text-sm">Deployed ✅</p>
              <div className="flex gap-2 project-description justify-between flex-wrap">
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
        {/* Project-4 */}
        <div
          data-aos="zoom-in-up"
          className=" lg:w-[25%] lg:h-[360px]  sm:w-[50%] md:w-[40%] w-[80%] bg-gray-900  projectShadow sm:h-[350px] rounded-lg p-2 "
        >
          <div className="rounded-2xl  ">
            {/* <img
              className="w-[100%] sm:h-[200px]  h-[150px] rounded-2xl"
              alt="COMING SOON"
            /> */}
            <h1 className="flex justify-center w-[100%] sm:h-[200px]  h-[150px] text-xl">
              Coming Soon
            </h1>
            <div className="bg-[#2d434c] p-5  h-[100%] lg:h-[120px] mt-4 rounded-lg ">
              <h1 className="font-bold text-white mt-3 font-serif">--</h1>
              <p className="text-yellow-500 text-sm">In Progress🔰</p>
              <div className="flex gap-2 project-description justify-between flex-wrap">
                <div>
                  <a href="" target="_blank">
                    <button className="p-[8px] mt-[7px] bg-green-600 text-white outline-none ">
                      Live Url
                    </button>
                  </a>
                </div>
                <div className="flex justify-center items-center mr-3">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out text-lg hover:cursor-pointer ml-3 mt-3" />
                  </a>
                </div>
                <div className="mt-2">
                  <ProjectCard projectDescription="Coming Soon" tech="Soon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project-5 */}
        <div
          data-aos="zoom-in-up"
          className=" lg:w-[25%] lg:h-[360px]  sm:w-[50%] md:w-[40%] w-[80%] bg-gray-900  projectShadow sm:h-[350px] rounded-lg p-2 "
        >
          <div className="rounded-2xl  ">
            {/* <img
              className="w-[100%] sm:h-[200px]  h-[150px] rounded-2xl"
              alt="COMING SOON"
            /> */}
            <h1 className="flex justify-center w-[100%] sm:h-[200px]  h-[150px] text-xl">
              Coming Soon
            </h1>
            <div className="bg-[#2d434c] p-5  h-[100%] lg:h-[120px] mt-4 rounded-lg ">
              <h1 className="font-bold text-white mt-3 font-serif">--</h1>
              <p className="text-yellow-500 text-sm">In Progress🔰</p>
              <div className="flex gap-2 project-description justify-between flex-wrap">
                <div>
                  <a href="" target="_blank">
                    <button className="p-[8px] mt-[7px] bg-green-600 text-white outline-none ">
                      Live Url
                    </button>
                  </a>
                </div>
                <div className="flex justify-center items-center mr-3">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out text-lg hover:cursor-pointer ml-3 mt-3" />
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
