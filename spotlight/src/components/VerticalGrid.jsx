import React from 'react';
import './VerticalGrid.css';

const VerticalGrid = ({ items }) => {
    return (
        <div className="vertical-grid">
            {items.map((item, index) => (
                <div className="grid-card" key={index}>
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default VerticalGrid;