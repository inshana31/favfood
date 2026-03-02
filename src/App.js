// App.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Favorite foods array
  const favoriteFoods = ["Pizza", "Ice Cream", "Sushi", "Pasta"];

  // State for enthusiasm message
  const [message, setMessage] = useState("Select a food that you love!");

  // Function to update message when a food button is clicked
  const showLoveForFood = (food) => {
    setMessage(`I love ${food}!`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg text-center" style={{ width: "28rem" }}>
        <h2 className="mb-3">My Favorite Foods</h2>

        {/* Food List */}
        <ul className="list-group">
          {favoriteFoods.map((food, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {food}
              <button
                className="btn btn-sm btn-primary"
                onClick={() => showLoveForFood(food)}
              >
                Show Love
              </button>
            </li>
          ))}
        </ul>

        {/* Enthusiasm Message */}
        <p className="mt-4 text-muted">{message}</p>
      </div>
    </div>
  );
}

export default App;