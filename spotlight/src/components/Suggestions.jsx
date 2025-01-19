import React from "react";
import "./Suggestions.css";

const suggestions = [
  {
    title: "Food Specials",
    description: "Explore exclusive food offers near you.",
    image: "path-to-food-specials-image", // Replace with image path
  },
  {
    title: "Festivals",
    description: "Find upcoming festivals and celebrations.",
    image: "path-to-festivals-image", // Replace with image path
  },
  {
    title: "Happy Hour",
    description: "Discover happy hour deals in the city.",
    image: "path-to-happy-hour-image", // Replace with image path
  },
  {
    title: "Meal Deals",
    description: "Affordable meals for everyone.",
    image: "path-to-meal-deals-image", // Replace with image path
  },
  {
    title: "Trivia Night",
    description: "Challenge yourself at trivia nights.",
    image: "path-to-trivia-night-image", // Replace with image path
  },
  {
    title: "Community Market",
    description: "Visit local community markets.",
    image: "path-to-community-market-image", // Replace with image path
  },
];

const Suggestions = () => {
  return (
    <div className="suggestions-container">
      <h2>Suggestions</h2>
      <input
        type="text"
        className="search-bar"
        placeholder="Search for something to do in the city..."
      />
      <div className="suggestions-grid">
        {suggestions.map((item, index) => (
          <div className="suggestion-card" key={index}>
            <img src={item.image} alt={item.title} className="suggestion-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="details-button">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;