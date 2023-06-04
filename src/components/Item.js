import React, { useState } from "react";

function Item({ name, category }) {
  const [liState, setLiState] = useState("");
  function handleAddToCart() {
    if (!liState) {
      setLiState("in-cart");
    } else {
      setLiState("");
    }
  }

  return (
    <li className={liState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={liState ? "remove" : "add"} onClick={handleAddToCart}>
        {liState ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
