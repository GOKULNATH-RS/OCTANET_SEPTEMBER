import React from "react";
const ExploreCard = ({ imgUrl, title, desc }) => {
  return (
    <div className="flex w-max h-[130px] rounded-full glassmorphism items-center drop-shadow-xl scale-90 hover:scale-[0.93] hover:ease-in-out hover:duration-100 hover:cursor-pointer ">
      <img src={imgUrl} className="h-full " />
      <div className="flex gap-4 flex-col items-center py-3 px-6 h-full">
        <p className="text-sml">{title}</p>
        <p className="text-[12px] w-[350px] font-poppins px-5">{desc}</p>
      </div>
    </div>
  );
};

export default ExploreCard;
