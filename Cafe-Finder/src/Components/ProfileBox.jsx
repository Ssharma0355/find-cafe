import React from 'react';
import './ProfileBox.css';
import Profile from './Profile.jpg'

const ProfileBox = ({ altText }) => {
    return (
        <div className="profile-box">
            <img src={Profile} alt={altText} className="profile-image" />
        </div>
    );
};

export default ProfileBox;