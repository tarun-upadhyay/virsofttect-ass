import React from "react";
import { BsFillEmojiFrownFill } from "react-icons/bs";
const EmptyList = () => {
  return (
    <div className="w-[80%] m-auto text-center p-5 ">
      <h1 className="bg-[#313866] text-[#fff] inline-block p-5 px-10 rounded-2xl">
        <BsFillEmojiFrownFill /> No tasks added yet!
      </h1>
    </div>
  );
};

export default EmptyList;
