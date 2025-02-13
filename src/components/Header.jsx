import React from "react";
import Logo from "../assets/logo.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function Header({ isAbsolute = false }) {
  return (
    <header
      className={` mt-5 w-full max-w-screen-xl h-[76px] flex justify-between items-center px-6 mx-auto border border-[#072e35] rounded-full 
      ${isAbsolute ? "absolute top-0 left-1/2 transform -translate-x-1/2 z-50 bg-[#031e23]/60" : "mt-9 relative bg-[#031e23]"}`}
    >
     <Link to ="/"><img src={Logo} alt="Conference Logo" className="h-[40px] w-[100px]" /></Link> 

      <div className="hidden md:flex gap-4">
        <p className="text-white">Events</p>
        <Link to ="about"> <p className="text-gray-400">About Project</p></Link>
        <p className="text-gray-400">My Tickets</p>
       
      </div>

      <Link to ="/ticket"><button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2">
      My Tickets <FiArrowRight /> </button></Link>
      
    </header>
  );
}
