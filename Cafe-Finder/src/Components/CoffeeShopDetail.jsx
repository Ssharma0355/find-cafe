import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './CoffeeShopDetails.css';

const CoffeeShopDetails = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState({ coffee: [], drinks: [], food: [] });
  const [activeTab, setActiveTab] = useState('coffee');

  useEffect(() => {
    axios.get(`http://localhost:5001/api/coffeeShops/${id}/menu`)
      .then(res => setMenu(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const renderMenuItems = (items) => (
    items.map(item => (
      <div key={item.name} className="menu-item">
        <p className="menu-item-name">{item.name}</p>
        <p className="menu-item-price">${item.price}</p>
      </div>
    ))
  );

  return (
    <div className="coffee-shop-details">
      <Link to="/" className="back-button">Back</Link>
      <h2>Coffee Shop Menu</h2>
      <div className="menu-tabs">
        <button
          className={`tab ${activeTab === 'coffee' ? 'active' : ''}`}
          onClick={() => setActiveTab('coffee')}
        >
          Coffee
        </button>
        <button
          className={`tab ${activeTab === 'drinks' ? 'active' : ''}`}
          onClick={() => setActiveTab('drinks')}
        >
          Drinks
        </button>
        <button
          className={`tab ${activeTab === 'food' ? 'active' : ''}`}
          onClick={() => setActiveTab('food')}
        >
          Food
        </button>
      </div>
      <div className="menu-list">
        {activeTab === 'coffee' && renderMenuItems(menu.coffee)}
        {activeTab === 'drinks' && renderMenuItems(menu.drinks)}
        {activeTab === 'food' && renderMenuItems(menu.food)}
      </div>
    </div>
  );
};

export default CoffeeShopDetails;
