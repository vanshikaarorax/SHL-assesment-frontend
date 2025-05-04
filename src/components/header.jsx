import React, { useState } from "react";
import axios from "axios";

export const Header = (props) => {
  const [query, setQuery] = useState(""); // Track search query
  const [results, setResults] = useState([]); // Store search results
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error state

  // Handle search functionality when the button is clicked
  const handleSearch = async () => {
    if (!query) return; // If no query is entered, do nothing
    setLoading(true); // Start loading state
    setError(null); // Reset error state

    console.log(`Sending request with query: ${query}`); // Log query

    try {
      const response = await axios.get("https://shl-assignemnt-backend.onrender.com/recommend", {
        params: { query }, // Send query in the URL parameters
      });

      console.log('Response received:', response); // Log response
      setResults(response.data); // Set search results to state
    } catch (error) {
      console.error("Error fetching recommendations:", error); // Log the error
      setError("Error fetching recommendations."); // Set error message if request fails
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2>{props.data ? props.data.title : "Loading"}</h2>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>

                {/* Search Box */}
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)} // Update query state
                  placeholder="Enter your test requirements"
                  className="form-control"
                />
                <button
                  className="btn btn-custom btn-lg"
                  onClick={handleSearch} // Handle the search when button is clicked
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Searching..." : "Search Tests"} {/* Display loading text if searching */}
                </button>

                {/* Display Results */}
                <div style={{ marginTop: "20px", textAlign: "left" }}>
                  {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
                  {results.length === 0 && !loading && !error && <p>No results found</p>} {/* Display if no results */}
                  {results.map((test, idx) => (
                    <div key={idx} style={{ marginBottom: "20px" }}>
                      <h4>{test.name}</h4>
                      <p><strong>Category:</strong> {test.category}</p>
                      <p><strong>Description:</strong> {test.description}</p>
                      <p><strong>Similarity:</strong> {test.similarity.toFixed(2)}</p>
                      <a href={test.url} target="_blank" rel="noopener noreferrer">View Test</a>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
