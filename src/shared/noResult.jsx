import React from "react";
import noResultImage from "../images/NoResult.png";

const NoResult = () => {
  return (
    <div className="relative top-[calc(50%-8rem)] left-[calc(50%-12rem)] w-96">
      <img src={noResultImage} alt="NoResult" />
      <span className="flex items-center justify-center mt-5 font-bold text-xl text-white">
        No results found
      </span>
    </div>
  );
};

export default NoResult;
