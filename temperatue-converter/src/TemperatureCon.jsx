import React, { useState } from "react";
import { Label, Select, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { RiFahrenheitFill, RiCelsiusFill } from "react-icons/ri";

const setColorFun = (val, type) => {
  if (val >= 0 && val <= 18 && type === "celsius") {
    return ["#75cbff", "Cold"];
  } else if (val >= 19 && val <= 27 && type === "celsius") {
    return ["#08e670", "Sunny"];
  } else if (val >= 28 && type === "celsius") {
    return ["#FD5740", "Hot"];
  } else if (val < 0 && type === "celsius") {
    return ["#294766", "Freezing"];
  } else if (val >= 32 && val < 64.4 && type === "fahrenheit") {
    return ["#75cbff", "Cold"];
  } else if (val >= 64.5 && val <= 80.6 && type === "fahrenheit") {
    return ["#08e670", "Sunny"];
  } else if (val >= 80.7 && type === "fahrenheit") {
    return ["#FD5740", "Hot"];
  } else if (val < 32.0 && type === "fahrenheit") {
    return ["#294766", "Freezing"];
  }
  return ["#08e670", "Sunny"];
};

const TemperatureCon = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState("");
  const [scale, setScale] = useState("celsius");
  const [color, setColor] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[0-9.-]*$/.test(value)) {
      setError(false);
      setInputValue(value);
    } else {
      setError(true);
    }
    setTimeout(() => {
      setError(false);
    }, 2000);
  };
  const convertToCelsius = () => {
    if (isNaN(inputValue) || inputValue.length === 0) {
      setError("Please enter a valid number.");
      setResult("");
    } else {
      setError("");
      const celsius =
        scale === "fahrenheit"
          ? (((inputValue - 32) * 5) / 9).toFixed(2)
          : inputValue;
      setResult(
        `${inputValue}°${scale.toUpperCase()} is equal to ${celsius}°C`
      );

      let dataCol = setColorFun(celsius, "celsius");
      setColor(dataCol);
    }
  };
  const convertToFahrenheit = () => {
    if (isNaN(inputValue) || inputValue.length === 0) {
      setError("Please enter a valid number.");
      setResult("");
    } else {
      setError("");
      const fahrenheit =
        scale === "celsius"
          ? ((inputValue * 9) / 5 + 32).toFixed(2)
          : inputValue;
      setResult(
        `${inputValue}°${scale.toUpperCase()} is equal to ${fahrenheit}°F`
      );
      let dataCol = setColorFun(fahrenheit, "fahrenheit");
      setColor(dataCol);
    }
  };
  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };
  return (
    <div className="m-auto md:w-[60%] sm:w-[70%] mb:w-[80%] lg:w-[30%] p-5 px-[0] flex flex-col justify-center items-center ">
      <h1 className="m-5 text-[#0E21A0] font-extrabold">Temperature Converter</h1>
      <div className="flex gap-5  justify-center pt-8 w-[100%] bg-[#FFC436] md:px-5 rounded-t-3xl">
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="input" value="Enter Temperatue" />
          </div>
          <div className="w-[100%] h-[70px]">
            <TextInput
              id="base"
              sizing="md"
              type="text"
              placeholder="Enter temperature"
              value={inputValue}
              onChange={handleInputChange}
              className=""
            />
            <span className={`text-[#C70039] ${error ? "static" : "hidden"}`}>
              Please enter a valid Number
            </span>
          </div>
        </div>
        <div className="max-w-md" id="select">
          <div className="mb-2 block">
            <Label htmlFor="conversion" value="Select your conversion" />
          </div>
          <Select
            id="conversion"
            onChange={handleScaleChange}
            value={scale}
            required
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </Select>
        </div>
      </div>
      <div className="w-[100%] bg-[#FFC436]  pb-5">
        <Button.Group className="flex gap-5 items-center justify-center p-2 ">
          <Button
            color="gray"
            className="bg-cel text-[#ffffff] p-3 px-5"
            onClick={convertToCelsius}
          >
            <RiCelsiusFill className="mr-3 h-4 w-4" />
            <p>Convert to Celsius</p>
          </Button>
          <Button
            color="gray"
            className="bg-fah p-3 px-5"
            onClick={convertToFahrenheit}
          >
            <RiFahrenheitFill className="mr-3 h-4 w-4" />
            <p>Convert to Fahrenheit</p>
          </Button>
        </Button.Group>
      </div>
      <div
        id="card"
        style={{ backgroundColor: color[0] }}
        className={`h-[250px] rounded-b-3xl w-[100%] flex items-center justify-center ${
          result.length ? "static" : "hidden"
        }`}
      >
        <div>
          <h1 className="text-center text-[#ffff]">{result}</h1>
          <h3 className="text-center text-[#ffff]"> It's {color[1]}</h3>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCon;
