// src/components/RecordForm.jsx
import { useState } from "react";

function RecordForm() {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    genre: "",
    price: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newRecord = {
      ...formData,
      price: parseFloat(formData.price)
    };
    console.log(newRecord);

    fetch("http://localhost:3001/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRecord)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add record");
        return res.json();
      })
      .then(() => {
        alert("Record added successfully!");
        setFormData({
          title: "",
          artist: "",
          genre: "",
          price: ""
        });
      })
      .catch((err) => console.error("Error adding record:", err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Record</h2>

      <label>
        Title:
        <input name="title" value={formData.title} onChange={handleChange} required />
      </label>

      <label>
        Artist:
        <input name="artist" value={formData.artist} onChange={handleChange} required />
      </label>

      <label>
        Genre:
        <input name="genre" value={formData.genre} onChange={handleChange} required />
      </label>

      <label>
        Price:
        <input name="price" value={formData.price} onChange={handleChange} required type="number" step="0.01" />
      </label>

      <button type="submit">Add Record</button>
    </form>
  );
}

export default RecordForm;