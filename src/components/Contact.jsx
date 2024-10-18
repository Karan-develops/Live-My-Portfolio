import React, { useRef } from "react";
import { Input, Textarea } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import contactImg from "../images/contact.svg";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r30sifj", "template_qqzcoau", form.current, {
        publicKey: "oGi8vJ9cUi6phP9YR",
      })
      .then(
        () => {
          toast.success("Message sent to Karan's Email.");
          e.target.reset();
          // console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Error sending email, Please try again.");
          e.target.reset();
          // console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className=" w-[100%] lg:h-[100vh] h-full flex justify-center mt-5 gap-6 items-center"
    >
      <div className="flex lg:flex-row flex-col-reverse lg:justify-around items-center gap-10 ">
        <div
          data-aos="zoom-out-down"
          className="flex lg:items-center items-end lg:justify-center justify-end"
        >
          <img
            className="lg:w-[400px] w-[200px] lg:h-[400px] h-[200px]"
            src={contactImg}
            alt=""
          />
        </div>
        <div className="ml-6" data-aos="zoom-in-right">
          <h1 className=" mb-6 text-center lg:text-4xl text-3xl font-bold text-gray-200">
            Contact me
          </h1>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className=" lg:h-[400px] h-full sm:p-12 p-6 rounded-2xl flex flex-col gap-4 formShadow mt-5"
          >
            <div>
              <Input
                autoComplete="off"
                name="from_name"
                className="bg-[#493370] sm:p-5 p-3 outline-none text-white border-none rounded-2xl"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <Input
                autoComplete="off"
                name="user_email"
                className="bg-[#493370] sm:p-5 p-3 outline-none text-white border-none rounded-2xl"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <Textarea
                className="w-[100%] bg-[#493370] outline-none border-none sm:p-5 p-3 text-white rounded-2xl"
                name="message"
                cols="25"
                rows="5"
                placeholder="Write Your Message"
              ></Textarea>
            </div>
            <div>
              <button
                type="submit"
                className=" flex px-[20px] py-[8px] bg-cyan-500 text-white outline-none "
              >
                Send Message <Send className="h-5 mt-1 ml-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
