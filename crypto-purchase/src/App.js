import React from "react";
import Navbar from "./Components/Navbar";
import Store from "./Components/Store";

const App = () => {
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png')] bg-cover bg-center min-h-[100vh]">
      <Navbar />

      <Store />
    </div>
  );
};

export default App;
