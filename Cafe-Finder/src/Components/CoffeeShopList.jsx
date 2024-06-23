// src/components/CoffeeShopList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CoffeeShopList = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/coffeeShops')
      .then(res => setCoffeeShops(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Coffee Shops</h2>
      <ul>
        {coffeeShops.map(shop => (
          <li key={shop._id}>
            <Link to={`/coffee-shop/${shop._id}`}>{shop.name}</Link>
            <p>{shop.address}</p>
            <p>Distance: {shop.distance} miles</p>
            <p>Rating: {shop.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeShopList;
