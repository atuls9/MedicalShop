import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import "./Cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let total = 0;
  let totalProduct = 0;
  const cart = cartCtx.productAdded.map((product) => {
    total = total + +product.quantity * product.price;
    totalProduct = +product.quantity * product.price;
    return (
      <div>
        <div>
          <li>
            <span>{product.name}</span>
            {product.quantity ? <span>Quantity = {product.quantity}</span> : ""}
            <span>price = ₹{product.price}</span>
            <h4 className="total">Total: {totalProduct}</h4>
          </li>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="item1">
        <ul>{cart}</ul>
      </div>
      <div className="item2" style={{ display: "flex" }}>
        <span>
          {" "}
          <h2>Total: {total}</h2>
        </span>
        <span>
          {" "}
          <button
            onClick={() => props.setCloseCart()}
            className="cls"
            style={{ display: "flex" }}
          >
            Close
          </button>
        </span>
        <span>
          {" "}
          <button className="cls" style={{ display: "flex" }}>
            Order
          </button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
