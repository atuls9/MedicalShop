import React, { useContext, useState } from "react";
import ProductContext from "../store/productContext";
import CartContext from "../store/CartContext";
import "./ProductShowOnScreen.css";
const ProductShowOnScreen = () => {
  const [quantity, setQuantity] = useState("0");

  const productCtx = useContext(ProductContext);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (product) => {
    const quant = document.getElementById("quantity").value;
    setQuantity(quant);

    cartCtx.addProduct({ ...product, quantity: quantity });
    setQuantity(0);
  };
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const product = productCtx.products.map((product) => {
    return (
      <li className="ul" key={product.key}>
        <span> {product.name}</span>
        <span> {product.description}</span>
        <span> price = ₹{product.price}</span>
        <label htmlFor=""> Quantity</label>
        <input
          style={{ marginLeft: "16px", width: "50px" }}
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleChange}
        />
        {/* <span> {product.key}</span> */}
        <div className="button">
          <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul>{product}</ul>
    </div>
  );
};

export default ProductShowOnScreen;
