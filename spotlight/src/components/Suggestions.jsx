import React, { useState, useEffect } from 'react';
import './Suggestions.css';
import VerticalGrid from './VerticalGrid';
import axios from 'axios';

const Suggestions = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/events')
            .then(response => {
                setEvents(response.data.events);
            })
            .catch(error => {
                console.error('There was an error fetching the events:', error);
            });
    }, []);

    const spotlightItems = events.map(event => ({
        image: event.imageUrl || '/default-image.jpg',
        title: event.title
    }));

    return (
        <div className="suggestions-container">
            <VerticalGrid items={spotlightItems} />
        </div>
    );
};

export default Suggestions;
