import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [productAdded, setProductAdded] = useState([]);

  const addProductHandler = (product) => {
    const existingCartItemIndex = productAdded.findIndex(
      (el) => el.key === product.key
    );
    console.log(existingCartItemIndex);
    const existingCartItem = productAdded[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: +existingCartItem.quantity + +product.quantity,
      };
      updatedItems = [...productAdded];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = productAdded.concat(product);
      console.log(updatedItems, "add");
    }
    console.log(updatedItems, "add add");

    setProductAdded(updatedItems);
  };

  const removeProductHandler = (key) => {
    console.log(key);
  };

  const cartContext = {
    productAdded: productAdded,

    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
