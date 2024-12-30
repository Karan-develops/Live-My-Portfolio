import { TypeAnimation } from "react-type-animation";
import heroImg from "../images/heroImg.svg";
import TogglingText from "./ToggleText";
import HeroLinks from "./ui/HeroLinks";
import HeroBtn from "./ui/HeroBtn";

const BannerParticles = () => {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
        <TogglingText />
      </div>
      <div className="banner h-full z-10 relative">
        {" "}
        <div className="bannerCustom flex items-center ml-16 sm:flex-row flex-col md:justify-around h-full">
          <div className="lg:flex-0.7 sm:w-[60%] w-full sm:p-10">
            <h1 className="sm:text-3xl text-lg font-bold">Hi There,</h1>
            <h1 className="md:text-4xl text-2xl">
              I'm{" "}
              <span className="text-[#e3662c] font-extrabold">
                Karan Aggarwal
              </span>
            </h1>

            <div className="flex items-center w-full gap-2">
              <h1 className="sm:text-2xl text-xl">I am into </h1>
              <TypeAnimation
                sequence={[
                  "Mern Stack",
                  1000,
                  "Backend Dev.",
                  1000,
                  "Problem Solving",
                  1000,
                  "Web Development",
                  1000,
                  "BlockChain",
                  1000,
                ]}
                wrapper="span"
                speed={200}
                style={{
                  display: "inline-block",
                  color: "#bea6ff",
                  fontWeight: "bold",
                }}
                repeat={Infinity}
                className="typing-text-large"
              />
            </div>
            <HeroLinks />
            <HeroBtn />
          </div>
          <img
            src={heroImg}
            className="bannerImgCus h-[38vh] animate-float mr-12"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerParticles;
