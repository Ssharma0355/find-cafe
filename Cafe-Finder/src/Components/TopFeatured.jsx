import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopFeatured.css';

const TopFeatured = () => {
    const [topCoffeeShops, setTopCoffeeShops] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/coffeeShops/featured/top')
            .then(res => setTopCoffeeShops(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="featured-container">
            <h2>Featured Coffee Shops</h2>
            <div className="scrollable-list">
                {topCoffeeShops.map(shop => (
                    <div className="coffee-shop-card" key={shop._id}>
                        <img src={shop.image} alt={shop.name} className="coffee-shop-image" />
                        <div className="coffee-shop-info">
                            <h3>{shop.name}</h3>
                            <p>{shop.address}</p>
                            <div className="rating">Rating: {shop.rating}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopFeatured;
