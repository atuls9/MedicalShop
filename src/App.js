import "./App.css";
import ProductForm from "./components/ProductAdd/ProductForm";
import ProductShowOnScreen from "./components/ProductShowOnScreen";
import ProductProvider from "./store/ProductProvider";
import CartProvider from "./store/CartProvider";
import { Modal } from "@mui/material";
import Cart from "./components/Cart";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const handleClose = () => setOpenCart(false);
  return (
    <ProductProvider>
      <CartProvider>
        <Header setOpen={setOpenCart} />
        <Modal open={openCart} onClose={handleClose}>
          <Cart setCloseCart={handleClose}> </Cart>
        </Modal>
        <ProductForm />
        <ProductShowOnScreen />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
