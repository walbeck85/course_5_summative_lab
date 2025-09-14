// This component is responsible for displaying the store's product catalog.
// It fetches all records from the backend API, filters them based on a search term,
// and renders each product using the ProductCard component.
// It also handles updating product prices and deleting products using PATCH and DELETE requests respectively.

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Shop.css";
import useProductFilter from "../hooks/useProductFilter";

function Shop() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all records from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:3001/records")
      .then((res) => res.json())
      .then(setRecords)
      .catch((err) => console.error("Error fetching records:", err));
  }, []);

  // Updates a record in local state after a successful price update from the backend
  function handleUpdatedRecord(updated) {
    setRecords((prev) =>
      prev.map((r) => (r.id === updated.id ? updated : r))
    );
  }

  // Deletes a record from the backend and removes it from local state upon success
  function handleDeleteRecord(id) {
    fetch(`http://localhost:3001/records/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        setRecords((prev) => prev.filter((r) => r.id !== id));
      })
      .catch((err) => console.error("Error deleting record:", err));
  }

  // Filters the list of records based on the user's search input
  const filteredRecords = useProductFilter(records, searchTerm);

  // Render the page including a search bar and a grid of filtered product cards
  // Pass callback props to each ProductCard for updating or deleting a record
  return (
  <div className="shop-container">
    <h1 className="shop-heading">Shop Our Records</h1>

    <input
      type="text"
      placeholder="Search by title or artist"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />

    <div className="product-grid">
      {filteredRecords.map((record) => (
        <ProductCard
          key={record.id}
          record={record}
          onPriceUpdate={handleUpdatedRecord}
          onDelete={handleDeleteRecord}
        />
      ))}
    </div>

    {filteredRecords.length === 0 && (
      <p className="no-results">No records match your search.</p>
    )}
  </div>
);
}

export default Shop;