import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './TopFeatured.css';

const TopFeatured = () => {
    const [topCoffeeShops, setTopCoffeeShops] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/coffeeShops/featured/top')
            .then(res => {
                console.log(res.data); // Log the response data
                setTopCoffeeShops(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h2 className='feature'>Featured Coffee Shops</h2>
            <div className="featured-container">
                <div className="grid-list">
                    {topCoffeeShops.map(shop => (
                        <Link to={`/coffee-shop/${shop._id}`} className="coffee-shop-link" key={shop._id}>
                            <div className="coffee-shop-card">
                                <div className='imgs'>
                                    <img src={shop.image} alt={shop.name} className="coffee-shop-image" />
                                </div>
                                <div className="coffee-shop-info">
                                    <h3>{shop.name}</h3>
                                    <div className="rating">
                                        <FaStar className='star' color="gold" size={12} /> {shop.rating}
                                        <p>12,000 views</p>
                                    </div>
                                    <div className="distance">{shop.distance} miles</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TopFeatured;
