import React from "react";
import Product from "./Product";

function ProductList({ products, onAdd }) {
  return (
    <div>
      <h2>Products</h2>
      {products.map((item, index) => (
        <Product key={index} name={item} onAdd={() => onAdd(item)} />
      ))}
    </div>
  );
}

export default ProductList;
