import React from "react";
import { Input, Button } from "@material-tailwind/react";
const InputData = ({ handleClick, setEnterTodo, enterTodo, error }) => {
  return (
    <div className="bg-[#F4F2FF] sm:p-1 md:p-5 md:px-10 flex items-center justify-center md:gap-5 sm:gap-2 border border-blue rounded-xl  md:w-[80%] lg:w-[30%] sm:w-[100%] mx-auto my-5">
      <label htmlFor="" className="font-wsans p-1">
        Title
        <Input
          variant="standard"
          label="Enter a new Todo"
          className="outline p-1"
          value={enterTodo}
          onChange={(e) => setEnterTodo(e.target.value)}
        />
        <span className={`text-[#C23373] ${error.length>1 ? "block" :  "hidden"}   `}>
          {error}
        </span>
      </label>
      <Button className="h-[50px] p-4" onClick={handleClick}>
        ADD
      </Button>
    </div>
  );
};

export default InputData;
