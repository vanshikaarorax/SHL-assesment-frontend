SHL Test Recommender – Frontend
This is the React-based frontend for the SHL Test Recommendation App. Users can input test requirements and receive top 3 most similar SHL tests, retrieved via a Flask backend.

🌐 Live Demo
Frontend: https://shl-assignemnt-backend-lhkd.vercel.app/
Backend API: https://shl-assignemnt-backend.onrender.com

💡 Features
Search input for user queries

Fetches relevant SHL test recommendations using a Flask API

Displays results with name, category, description, similarity, and test link

Handles loading and error states gracefully

🛠️ Tech Stack
Frontend: React, Axios, Bootstrap

Backend (separate repo): Flask, Selenium, Pandas, scikit-learn



Install dependencies
npm install

Run locally
npm start

The frontend will be available at
http://localhost:3000

🌍 Deployment
This app is deployed on Render. To deploy:

Push your code to GitHub

Create a new Static Site on Render

Set the build command to: npm run build

Set the publish directory to: build

Note: Ensure the API URL in Header.jsx uses the deployed backend:

js
Copy
Edit
const response = await axios.get("https://shl-assignemnt-backend.onrender.com/recommend", {
  params: { query },
});
