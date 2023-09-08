import React from "react";
import logo from "./SL_0212121_40670_20.jpg";
const Navbar = () => {
  return (
    <div className="flex items-center gap-4 p-5 ml-5 shadow-xl">
      <img src={logo} alt="dfasf" className="h-[60px] w-[60px] rounded-full" />

      <h1 className="text-[#FFF0F5] font-wsans font-extrabold leading-7 text-3xl drop-shadow-2xl">
        Crypto Store
      </h1>
    </div>
  );
};

export default Navbar;
