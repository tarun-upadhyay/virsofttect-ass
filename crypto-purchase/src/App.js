import React from "react";
import CryptoStore from "./CryptoStrore";
import Navbar from "./Components/Navbar";
import Store from "./Components/Store";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png')] bg-cover bg-center min-h-[100vh]">
      <Navbar />
      <div className="flex md:flex-row sm:flex-col justify-between w-[90%] mx-auto my-5">
        <Store />
        <Cart />
      </div>
      <CryptoStore />
    </div>
  );
};

export default App;
