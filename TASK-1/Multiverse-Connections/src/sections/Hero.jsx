import React from "react";
import NavBar from "../components/NavBar";
const Hero = () => {
  return (
    <>
      <div className="absolute w-screen top-0">
        <NavBar />
      </div>
      <section className="bg-HeroBg bg-cover bg-center h-[100vh] w-[100vw] font-aquire text-white flex-col flex-center gap-20">
        <div className="flex flex-col items-center justify-center">
          <p className="tracking-[15px] lg:tracking-[25px] font-aquireLight max-md:text-sml text-md">
            U N L O C K T H E
          </p>
          <p className="text-5xl lg:text-8xl ">Multiverse</p>
        </div>
        <p className="text-md lg:text-xl font-aquireLight tracking-widest">
          Connect with Otherworldly Minds!
        </p>
      </section>
    </>
  );
};

export default Hero;
