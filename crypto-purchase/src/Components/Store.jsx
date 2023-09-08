import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
const Store = () => {
  const [currencies] = useState([
    { name: "Bitcoin", price: 40000 },
    { name: "Ethereum", price: 2800 },
    { name: "Litecoin", price: 150 },
  ]);
  const [cart, setCart] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const handleBuy = () => {
    if (selectedCurrency && quantity > 0) {
      setError("");
      const item = { ...selectedCurrency, quantity };
      setCart([...cart, item]);
      setSelectedCurrency(null);
      setQuantity(1);
    } else {
      return setError("Please enter a quantity");
    }
  };
  const handleQuantityChange = (currency) => {
    setError("");
    setSelectedCurrency(currency);
  };
  return (
    <div className="md:w-1/2 p-8">
      <div>
        <h1 className="text-[#ffff] font-extrabold"> Cryptocurrencies</h1>
      </div>
      <div>
        {currencies.map((currency, index) => (
          <div key={index} className="py-2">
            <div className="bg-red p-4 rounded-xl pl-8">
              <h3 className="text-2xl font-semibold text-blue-gray-50 mb-2">
                {currency.name}
              </h3>
              <p className="text-xl font-semibold text-blue-gray-50">
                Price: <span className="text-theblue">${currency.price}</span>
              </p>
              <button
                onClick={() => handleQuantityChange(currency)}
                className="text-xl font-semibold text-blue-gray-50 cursor-pointer"
              >
                Quantity
              </button>
              {selectedCurrency === currency && (
                <div className="flex items-center justify-items-start m-3">
                  <label htmlFor="">
                    <Input
                      label="Enter Quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                        return setError("");
                      }}
                      className="text-blue-gray-100 text-xl p-2"
                    />
                    <span
                      className={`${
                        error.length > 0 ? "visible" : "invisible"
                      } text-[#fff]`}
                    >
                      {error}
                    </span>
                  </label>
                  <Button onClick={handleBuy}>Buy</Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
