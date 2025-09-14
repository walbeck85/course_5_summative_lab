import { useState } from "react";
import "./ProductCard.css";

// ProductCard displays individual record information such as title, artist, genre, and price.
// It includes inline editing of the price using a form and PATCH request.
// It also allows deletion of the record using the onDelete handler passed from the parent.
function ProductCard({ record, onPriceUpdate, onDelete }) {
  const { id, title, artist, genre, price } = record;

  // Local state to toggle between view and edit mode for the price field.
  const [isEditing, setIsEditing] = useState(false);

  // Local state to store the updated price while editing.
  const [newPrice, setNewPrice] = useState(price);

  // Updates newPrice state as the input value changes in the form.
  function handlePriceChange(e) {
    setNewPrice(e.target.value);
  }

  // Handles submission of the edited price:
  // - Sends a PATCH request to update the record on the server.
  // - Calls the onPriceUpdate callback to update the parent component's state.
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

    {/* Delete button calls onDelete with the current record's ID when clicked.
        Parent component handles the actual deletion logic and state update. */}
    <button onClick={() => onDelete(id)} style={{ marginTop: "0.5rem", background: "red", color: "white" }}>
      Delete
    </button>
  </div>
);
}

export default ProductCard;