import React from "react";
import { AiFillDelete } from "react-icons/ai";
const Card = ({ title, handleDelete }) => {
  return (
    <div className="py-[24px] px-[18px] bg-[#EBEF95] rounded-3xl flex gap-3 items-center justify-between">
      <h1 className="text-[#000] text-2xl font-dmS font-semibold overflow-auto w-[80%]">
        {title}
      </h1>
      <AiFillDelete
        className="text-[#C63D2F] text-[24px] cursor-pointer"
        onClick={() => handleDelete(title)}
      />
    </div>
  );
};

export default Card;
