import React, { useContext } from "react";
import ProductContext from "../../store/productContext";

const ProductForm = () => {
  const productCtx = useContext(ProductContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const nm = document.getElementById("meicineName").value;
    const dec = document.getElementById("description").value;
    const prc = document.getElementById("price").value;

    const updatedProduct = {
      name: nm,
      description: dec,
      price: prc,
    };

    productCtx.addProduct(updatedProduct);

    // console.log(nm, dec, prc, l, m, s);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="meicineName">Medicine Name</label>
      <input type="text" id="meicineName" />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" />
      <label htmlFor="price">Price</label>
      <input type="number" id="price" />

      <button>Add Products</button>
    </form>
  );
};

export default ProductForm;
