// src/UserList.js
import React from 'react';
import ProfileCard from './ProfileCard';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.length === 0 ? (
        <p>No user profiles available.</p>
      ) : (
        users.map((user, index) => <ProfileCard key={index} {...user} />)
      )}
    </div>
  );
};

export default UserList;