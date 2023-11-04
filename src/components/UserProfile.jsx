import React from 'react';
import "../Styles/UserProfile.css";

function UserProfile({ name, email, imgUrl }) { // Accept props here
    return (
      <div className="user-profile"> {/* Use "user-profile" class for the container */}
        <img src={imgUrl} alt={`${name}'s profile`} className="user-profile-image" /> {/* Correct className for image */}
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
  
  export default UserProfile;