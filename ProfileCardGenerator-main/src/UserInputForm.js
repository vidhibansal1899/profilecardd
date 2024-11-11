// src/UserInputForm.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserInputForm.css'; // Optional: For styling

class UserInputForm extends Component {
  state = {
    name: '',
    age: '',
    location: '',
    bio: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser (this.state); // Ensure this matches the prop name
    this.setState({ name: '', age: '', location: '', bio: '' });
  };

  render() {
    return (
      <form className="user-input-form" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
        <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} required />
        <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.handleChange} required />
        <textarea name="bio" placeholder="Bio" value={this.state.bio} onChange={this.handleChange} required></textarea>
        <button type="submit">Add User</button>
      </form>
    );
  }
}

UserInputForm.propTypes = {
  add:PropTypes.func.isRequired, // Corrected line
};

export default UserInputForm;