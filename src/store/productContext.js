import React from "react";

const ProductContext = React.createContext({
  products: [],
  addProduct: (product) => {},
  removeProduct: (key) => {},
});
export default ProductContext;
