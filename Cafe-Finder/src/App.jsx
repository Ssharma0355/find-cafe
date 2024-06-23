import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopFeatured from './Components/TopFeatured';
import PhoneView from './PhoneView'
import CoffeeShopDetails from './Components/CoffeeShopDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneView />} />
        <Route path="/coffee-shop/:id" element={<CoffeeShopDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
