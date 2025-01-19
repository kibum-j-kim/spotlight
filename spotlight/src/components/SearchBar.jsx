import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    try {
      onSearch(query);
    } catch (error) {
      console.error('Error during search:', error);
    }
  }, [query, onSearch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '50px', width: '100%', maxWidth: '400px', marginRight: '0 auto' }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search events, food, activities..."
        style={{ flex: 1, padding: '10px', borderRadius: '50px', border: '1px solid #ccc', marginRight: '0 auto' }}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;