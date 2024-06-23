import React, { useState } from 'react';
import './NavBar.css';
import { FaHome, FaHeart, FaBookmark, FaUser } from 'react-icons/fa';

const NavBar = () => {
    const [active, setActive] = useState('home');

    return (
        <div className="nav-bar">
            <div
                className={`nav-item ${active === 'home' ? 'active' : ''}`}
                onClick={() => setActive('home')}
            >
                <FaHome className="icon" />
            </div>
            <div
                className={`nav-item ${active === 'heart' ? 'active' : ''}`}
                onClick={() => setActive('heart')}
            >
                <FaHeart className="icon" />
            </div>
            <div
                className={`nav-item ${active === 'bookmark' ? 'active' : ''}`}
                onClick={() => setActive('bookmark')}
            >
                <FaBookmark className="icon" />
            </div>
            <div
                className={`nav-item ${active === 'user' ? 'active' : ''}`}
                onClick={() => setActive('user')}
            >
                <FaUser className="icon" />
            </div>
        </div>
    );
};

export default NavBar;
