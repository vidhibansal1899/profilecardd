// src/App.js
import React, { useState } from 'react';
import UserInputForm from './UserInputForm';
import UserList from './UserList';
import './App.css'; // Optional: For styling

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser  = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div className="app">
      <h1>Profile Card Generator</h1>
      <UserInputForm addUser ={addUser } />
      <UserList users={users} />
    </div>
  );
};

export default App;