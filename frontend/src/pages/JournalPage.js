

import React, { useState } from "react";
import axios from "axios";

const JournalPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("date", date);
    if (imageFile) {
      formData.append("image", imageFile); // Assuming you're uploading an image
    }
    formData.append("user", "user123");  // Pass the user ID or information here

    try {
      // Make POST request to your backend API
      const response = await axios.post("http://localhost:5000/api/journals", formData);
      console.log(response.data);  // Handle the response from the backend
    } catch (err) {
      // Handle errors from the API request
      setError(err.response ? err.response.data : "Error submitting journal");
      console.error("Error submitting journal:", err);
    }
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="journal-page">
      <h2>Create New Journal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <button type="submit">Submit Journal</button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error if any */}
    </div>
  );
};

export default JournalPage;
