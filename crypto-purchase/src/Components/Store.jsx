import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import CartComp from "./CartComp";
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
      console.log(cart);
    } else {
      return setError("Please enter a quantity");
    }
  };
  const handleQuantityChange = (currency) => {
    setError("");
    setSelectedCurrency(currency);
  };
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  return (
    <div className="flex lg:flex-row sm:flex-col justify-between w-[90%] mx-auto my-5">
      <div className="lg:w-1/2 p-8">
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
      <div className="lg:w-1/2 p-8">
        <h1 className="text-[#ffff] font-wsans font-extrabold mb-2">
          {" "}
          You Cart
        </h1>
        {cart.length === 0 ? (
          <div className="flex items-center gap-4 p-10 bg-theblue text-[#ffff] rounded-2xl ym-3">
            <h1>Your cart is empty</h1>
            <AiOutlineShoppingCart className="text-[30px]" />
          </div>
        ) : (
          <div className="shadow-lg border p-5 rounded-2xl ">
            {cart.length > 0 &&
              cart.map((el, i) => {
                return (
                  <CartComp
                    id={i}
                    name={el.name}
                    quantity={el.quantity}
                    price={el.price}
                    handleRemoveItem={handleRemoveItem}
                  />
                );
              })}
            <p className="text-xl text-blue-gray-100 p-2 py-4 border text-center m-2 bg-theblue rounded-2xl">
              Total: ${calculateTotal()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
