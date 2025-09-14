import { useState } from "react";

function RecordForm() {
  // useState hook to manage controlled form input values for a new record
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    genre: "",
    price: ""
  });

  // Updates formData state when any input field changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // Handles form submission: constructs new record, sends POST request, resets form
  function handleSubmit(e) {
    e.preventDefault();
    const newRecord = {
      ...formData,
      // Convert price from string to float to ensure correct data type in backend
      price: parseFloat(formData.price)
    };
    console.log(newRecord);

    // Send POST request to the backend to persist the new record
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

  // Render form with controlled inputs for adding a new record
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