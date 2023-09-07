import React from "react";
import { ExploreCardDetails } from "../utils/constants";
import ExploreCard from "../components/ExploreCard";
const Explore = () => {
  return (
    <section
      id="Explore"
      className="bg-primary h-[100vh] w-[100vw] font-aquire text-white flex flex-col py-3 justify-evenly items-center"
    >
      <div className="h-[50vh] w-[70vh] gradient-02 absolute top-[200vh] right-0 rounded-full blur-[124px] -z-1" />
      <div className="h-[50vh] w-[70vh] gradient-02 absolute top-[270vh] left-0 rounded-full blur-[124px] -z-1" />
      <h1 className="section-head">Explore</h1>
      <div className="flex flex-col gap-1">
        {ExploreCardDetails.map((explore) => (
          <ExploreCard
            key={explore.title}
            imgUrl={explore.img}
            title={explore.title}
            desc={explore.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
