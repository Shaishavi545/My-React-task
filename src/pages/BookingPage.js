/*

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookingPage() {
  return (
    <div>
      <h1>Booking Page</h1>
      <Link to="/">Back to Home Page</Link>
  
      <Link to="/appointment/123">View Appointment Details</Link>
    </div>
  );
}


const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(formData.date) <= new Date()) {
      alert('The date must be in the future!');
      return;
    }
    localStorage.setItem('appointment', JSON.stringify(formData));
    window.location.href = '/appointment-details';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div>
        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default BookingPage;
BookingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function BookingPage() {
  return (
    <div>
      <h1>Booking Page</h1>
      <Link to="/">Back to Home Page</Link>
      <Link to="/appointment/123">View Appointment Details</Link>
    </div>
  );
}

export default BookingPage;*/
import React, { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(formData.date) <= new Date()) {
      alert('The date must be in the future!');
      return;
    }
    localStorage.setItem('appointment', JSON.stringify(formData));
    window.location.href = '/appointment-details';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div>
        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default BookingPage;




