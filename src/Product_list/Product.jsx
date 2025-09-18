import React from "react";

function Product({ name, onAdd }) {
  return (
    <div>
      <span>{name}</span>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
}

export default Product;
