import React from 'react';
import './Suggestions.css';
import VerticalGrid from './VerticalGrid';

const spotlightItems = [
    { image: "/brekabakery.jpg", title: "Breka Bakery" },
    { image: "/nwhack.png", title: "nwHacks 10th Anniversary" },
    { image: "/moose_trivia.png", title: "Moose Down Under's Trivia Night" },
    // Add more items as needed
];

const Suggestions = () => {
    return (
        <div className="suggestions-container">
            <VerticalGrid items={spotlightItems} />
        </div>
    );
};

export default Suggestions;