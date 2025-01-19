import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LocationSearch = ({ onSearch }) => {
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
    <div style={{ alignItems: 'center', padding: '0px', backgroundColor: 'white', borderRadius: '50px', width: '100%', maxWidth: '400px', marginLeft: '10px' }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter destination address..."
        style={{ flex: 1, padding: '10px', borderRadius: '50px', border: '1px solid #ccc', marginRight: '0 auto', backgroundColor: 'white', color: 'black', width: '100%', maxWidth: '400px' }}
      />
    </div>
  );
};

LocationSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default LocationSearch;