import "./Categories.css";

const categories = [
    { icon: "foodicon", label: "Food Specials" },
    { icon: "glass", label: "Happy Hours" },
    { icon: "ticket", label: "Meal Deals" },
    { icon: "trivia", label: "Trivia Night" },
    { icon: "festival", label: "Festivals" },
];

const Categories = () => {
    return (
        <div className="main-container">
            <div className="categories">
                {categories.map((category, index) => (
                    <div className="category-item" key={index}>
                        <img src={`/src/images/${category.icon}.png`} alt={category.label} />
                        <p className="category-label">{category.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
