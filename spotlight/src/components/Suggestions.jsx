import "./Suggestions.css";

const categories = [
  { icon: "foodicon", label: "Food Specials" },
  { icon: "glass", label: "Happy Hours" },
  { icon: "ticket", label: "Meal Deals" },
  { icon: "trivia", label: "Trivia Night" },
];

const Suggestions = () => {
  return (
    <div className="suggestions-container">
      <div className="categories">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <img src={`/src/images/${category.icon}.png`} alt={category.label} />
            <p>{category.label}</p>
          </div>
        ))}
      </div>
      <div className="spotlights-section">
        <h2>Spotlights Near You</h2>
        <div className="spotlights-grid">
          {/* Add spotlight cards dynamically */}
          <div className="spotlight-card">
            <img src="/assets/nwhacks.png" alt="NwHacks" />
            <p>NwHackathon</p>
          </div>
          <div className="spotlight-card">
            <p>Telus</p>
          </div>
        </div>
      </div>
      <div className="spotlights-section">
        <h2>Popular Spotlights</h2>
        <div className="spotlights-grid">
          {/* Add popular spotlight cards dynamically */}
          <div className="spotlight-card">
            <img src="/assets/trivia-night.png" alt="Trivia Night" />
            <p>Moose Down Under's Trivia Night</p>
          </div>
          <div className="spotlight-card">
            <img src="/assets/bakery.png" alt="Bakery" />
            <p>Breka Bakery, New Cake Flavour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
