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
            <div className="spotlight-card">
                <img src="/assets/nwhacks.png" alt="NwHacks" />
                <p>NwHackathon</p>
                <p>NWHackathon</p>
            </div>
            <div className="spotlight-card">
                <p>Telus</p>
            </div>
            <div className="spotlights-grid">
                {/* Add popular spotlight cards dynamically */}
                <div className="spotlight-card">
                    <img src="/assets/trivia-night.png" alt="Trivia Night" />
                    <img src="/assets/trivianight.png" alt="TriviaNight" />
                    <p>Moose Down Under's Trivia Night</p>
                </div>
                <div className="spotlight-card">
                    {/* Add more spotlight cards as needed */}
                </div>
            </div>
        </div>
    );
};

export default Suggestions;
