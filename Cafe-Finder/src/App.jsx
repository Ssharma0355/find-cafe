import React from 'react';
import PhoneView from './PhoneView';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CoffeeShopPage from './Pages/CoffeeShopPage';
function App() {
  return (
    <div className="app-container">
      <PhoneView />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coffee-shop/:id" element={<CoffeeShopPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
