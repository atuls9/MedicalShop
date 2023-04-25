import React from "react";

const CartContext = React.createContext({
  productAdded: [],
  addProduct: (product) => {},
  removeProduct: (key) => {},
});
export default CartContext;
