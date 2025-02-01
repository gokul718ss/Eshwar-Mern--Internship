import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [journals, setJournals] = useState([]);
  const [error, setError] = useState(null);

  // Fetch journals when the component mounts
  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/journals");
        setJournals(response.data);  // Set the fetched journals in the state
      } catch (err) {
        setError("Error fetching journals: " + err.message);  // Handle any errors
        console.error(err);
      }
    };

    fetchJournals();  // Call the function to fetch journals
  }, []);

  return (
    <div>
      <h2>Journal Dashboard</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}  {/* Display error if any */}
      <ul>
        {journals.map((journal) => (
          <li key={journal._id}>
            <h3>{journal.title}</h3>
            <p>{journal.description}</p>
            <p>{journal.location}</p>
            <p>{new Date(journal.date).toLocaleDateString()}</p>
            {journal.imageUrl && (
              <img
                src={`http://localhost:5000${journal.imageUrl}`}  // Correct image path
                alt="Journal"
                style={{ width: "200px", height: "auto" }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
