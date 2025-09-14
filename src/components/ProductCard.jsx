// src/components/ProductCard.jsx
import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ record, onPriceUpdate, onDelete }) {
  const { id, title, artist, genre, price } = record;
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(price);

  function handlePriceChange(e) {
    setNewPrice(e.target.value);
  }

  function handlePriceSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/records/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price: parseFloat(newPrice) })
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update price");
        return res.json();
      })
      .then((updatedRecord) => {
        onPriceUpdate(updatedRecord);
        setIsEditing(false);
      })
      .catch((err) => {
        console.error("Error updating price:", err);
        alert("Failed to update price");
      });
  }

  return (
  <div className="product-card">
    <h2>{title}</h2>
    <p><strong>Artist:</strong> {artist}</p>
    <p><strong>Genre:</strong> {genre}</p>

    {isEditing ? (
      <form onSubmit={handlePriceSubmit}>
        <input
          type="number"
          step="0.01"
          value={newPrice}
          onChange={handlePriceChange}
          style={{ width: "100px", marginRight: "8px" }}
        />
        <button type="submit">Save</button>
      </form>
    ) : (
      <p>
        <strong>Price:</strong> ${price.toFixed(2)}{" "}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </p>
    )}

    <button onClick={() => onDelete(id)} style={{ marginTop: "0.5rem", background: "red", color: "white" }}>
      Delete
    </button>
  </div>
);
}

export default ProductCard;