import React, { useState } from "react";
import ProductContext from "./productContext";

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addProductHandler = (product) => {
    setProducts([...products, { key: Math.random().toString(), ...product }]);
    console.log(product);
  };
  const removeProductHandler = (productObj) => {
    const existingProductIndex = products.findIndex(
      (el) => +el.key === +productObj.key
    );
    const existingProduct = products[existingProductIndex];
    const updatedProducts = [...products];

    updatedProducts[existingProductIndex] = {
      ...existingProduct,
      quantity: +existingProduct.quantity - 1,
    };

    // console.log(updatedProducts);
    setProducts([...updatedProducts]);
  };

  const productContext = {
    products: products,

    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
