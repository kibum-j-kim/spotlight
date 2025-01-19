import SearchBar from "./SearchBar";
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
    </div>
  );
};

export default Suggestions;
