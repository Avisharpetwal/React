import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function All() {
  const [cart, setCart] = useState([]);

  const products = ["Apple", "Banana", "Orange"];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Shop</h1>
      <ProductList products={products} onAdd={addToCart} />
      <Cart count={cart.length} />
    </div>
  );
}
