import React from 'react';
import './HorizontalScrollGrid.css';

const HorizontalScrollGrid = ({ items }) => {
    return (
        <div className="horizontal-scroll-grid">
            {items.map((item, index) => (
                <div className="grid-card" key={index}>
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default HorizontalScrollGrid;