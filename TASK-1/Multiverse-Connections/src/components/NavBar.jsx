import React from "react";
import Logo from "../assets/Logo.svg";
const NavBar = () => {
  return (
    <nav className="h-[10vh] glassmorphism items-center tracking-wider rounded-b-3xl flex justify-between text-white p-3 px-10 font-aquire">
      <img className="h-7 w-max" src={Logo} alt="" />
      <div className="flex max-md:gap-8 gap-14  text-md ">
        <a href="#">Home</a>
        <a href="#AboutUs">About Us</a>
        <a href="#Explore">Explore</a>
      </div>
      <a href="#GetStarted">Get Started</a>
    </nav>
  );
};

export default NavBar;
