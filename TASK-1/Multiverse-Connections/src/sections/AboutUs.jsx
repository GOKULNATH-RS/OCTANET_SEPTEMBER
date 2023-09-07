import React from "react";
const AboutUs = () => {
  return (
    <section
      className="bg-primary h-[100vh] w-[100vw] font-aquire text-white flex flex-col items-center justify-evenly px-[20%]"
      id="AboutUs"
    >
      <div className="h-[50vh] w-[70vh] gradient-02 absolute top-[100vh] left-0 rounded-full blur-[124px] -z-1" />
      <h1 className="section-head">About Us</h1>
      <p className="text-[24px] font-poppins ">
        Welcome to Multiverse Connections, where we turn the extraordinary
        concept of the multiverse into a reality. Our mission is to empower you
        to speak with alternate versions of yourself in other universes,
        fostering understanding and exploration. We prioritize your privacy and
        safety, ensuring a respectful and inclusive community. Join us to
        connect, share, and learn from the infinite perspectives of the
        multiverse. Dive into the unknown, explore your multiverse selves, and
        discover the extraordinary at Multiverse Connections.
      </p>
    </section>
  );
};

export default AboutUs;
