// src/components/CoffeeShopDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CoffeeShopDetail = () => {
  const { id } = useParams();
  const [coffeeShop, setCoffeeShop] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/coffeeShops/${id}`)
      .then(res => setCoffeeShop(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!coffeeShop) return <div>Loading...</div>;

  return (
    <div>
      <h1>{coffeeShop.name}</h1>
      <p>{coffeeShop.address}</p>
      <p>Distance: {coffeeShop.distance} miles</p>
      <p>Rating: {coffeeShop.rating}</p>
      <p>Review: {coffeeShop.review}</p>
      <h3>Menu:</h3>
      <ul>
        {coffeeShop.menu.map((item, index) => (
          <li key={index}>{item.item} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeShopDetail;
