/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import AppointmentDetailsPage from './AppointmentDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/appointment/:id" element={<AppointmentDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Adjust the path if necessary
import BookingPage from './BookingPage'; // Adjust the path if necessary
import AppointmentDetailsPage from './AppointmentDetailsPage'; // Adjust the path if necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/appointment/:id" element={<AppointmentDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import AppointmentDetailsPage from './pages/AppointmentDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-appointment" element={<BookingPage />} />
        <Route path="/appointment-details" element={<AppointmentDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;





