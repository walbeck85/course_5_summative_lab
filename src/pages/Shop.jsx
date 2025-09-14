// src/pages/Shop.jsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

function Shop() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/records")
      .then((res) => res.json())
      .then(setRecords)
      .catch((err) => console.error("Error fetching records:", err));
  }, []);

  function handleUpdatedRecord(updated) {
    setRecords((prev) =>
      prev.map((r) => (r.id === updated.id ? updated : r))
    );
  }

  const filteredRecords = records.filter((record) =>
    record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

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