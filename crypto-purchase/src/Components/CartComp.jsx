import React from "react";
import { Button } from "@material-tailwind/react";
const CartComp = ({ price, quantity, name, handleRemoveItem, id }) => {
  console.log(name);
  return (
    <div className="flex gap-2 mt-2">
      <h1 className="text-[#ffff]">
        {name} - Quantity: {quantity} - Total:${price * quantity}
      </h1>
      <Button onClick={() => handleRemoveItem(id)} className="bg-red">
        Remove
      </Button>
    </div>
  );
};

export default CartComp;
