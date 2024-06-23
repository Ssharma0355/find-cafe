// src/components/TopFeatured.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopFeatured = () => {
    const [topCoffeeShops, setTopCoffeeShops] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/coffeeShops/featured/top')
            .then(res => setTopCoffeeShops(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Top Featured Coffee Shops</h2>
            <ul>
                {topCoffeeShops.map(shop => (
                    <li key={shop._id}>
                        <p>{shop.name}</p>
                        <p>{shop.address}</p>
                        <p>Rating: {shop.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopFeatured;
