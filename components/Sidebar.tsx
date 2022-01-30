import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="/my-pic.jpg"
        alt="user avatar"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green"> Tushar </span>
        Raj
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        href=""
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social Icons */}
      <div className="flex justify-around my-5 text-green w-9/12 md:w-full mx-auto ">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address */}
      <div
        className="my-5 py-4 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Mohali, India</span>
        </div>
        <p className="my-2">rajtushar33@gmail.com</p>
        <p className="my-2">9653449702</p>
      </div>
      {/* Email Button */}
      <button
        onClick={() => window.open("mailto:rajtushar33@gmail.com")}
        className="bg-gradient-to-r from-green to-blue-400 w-8/12  rounded-full py-2 px-5 text-white my-2 focus:outline-none"
      >
        Email Me
      </button>
      <button className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
