// src/pages/HomePage.js
import React from 'react';
import CoffeeShopList from './components/CoffeeShopList';
import TopFeatured from './components/TopFeatured';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Coffee Shop Finder</h1>
      <TopFeatured />
      <CoffeeShopList />
    </div>
  );
};

export default HomePage;
