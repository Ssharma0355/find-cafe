import React from 'react';
import './PhoneView.css';
import NavBar from './Components/NavBar';
import ProfileBox from './Components/ProfileBox';
import SearchComponent from './Components/SearchComponent';
import TopFeatured from './Components/TopFeatured';
const PhoneView = () => {
  return (
    <div className="phone-view">
      <div className="profile">
     <ProfileBox />
      </div>
      <div className="head">
        <h1>Find a coffe shop anywhere </h1>
      </div>
      <div className="search">
      <SearchComponent />
      </div>
      <div className='featured'>
        <TopFeatured />
      </div>
      <div className='nav'>
        <NavBar />
      </div>
      
    </div>
  );
};

export default PhoneView;
