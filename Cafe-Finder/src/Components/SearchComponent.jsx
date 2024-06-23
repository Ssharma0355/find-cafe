import React, { useState } from 'react';
import './SearchComponent.css';
import { FaSearch, FaFilter } from 'react-icons/fa';

const SearchComponent = ({ onSearch, onFilter }) => {
    const [searchValue, setSearchValue] = useState('');
    const [showFilterModal, setShowFilterModal] = useState(false);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        onSearch(e.target.value);
    };

    const toggleFilterModal = () => {
        setShowFilterModal(!showFilterModal);
        onFilter();
    };

    return (
        <div className="search-container">
            <div className="search-box">
                <div className="search-icon" />
                <input
                    type="text"
                    placeholder="🔍 Search"
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>
            <button className="filter-button" onClick={toggleFilterModal}>
                <FaFilter className="filter-icon" />
            </button>

            {showFilterModal && (
                <div className="filter-modal">
                    <div className="filter-content">
                        <h3>Filter Options</h3>
                        {/* Add filter options here */}
                        <button onClick={toggleFilterModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchComponent;
