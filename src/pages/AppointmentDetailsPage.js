/*



// AppointmentDetailsPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function AppointmentDetailsPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Appointment Details Page</h1>
      <p>Details for appointment ID: {id}</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}

const AppointmentDetailsPage = () => {
  const appointment = JSON.parse(localStorage.getItem('appointment'));

  if (!appointment) {
    return <div>No appointment found.</div>;
  }

  return (
    <div>
      <h2>Appointment Details</h2>
      <p>Name: {appointment.name}</p>
      <p>Email: {appointment.email}</p>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
    </div>
  );
};

export default AppointmentDetailsPage;

// AppointmentDetailsPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function AppointmentDetailsPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Appointment Details Page</h1>
      <p>Details for appointment ID: {id}</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}

export default AppointmentDetailsPage;*/
import React from 'react';

const AppointmentDetailsPage = () => {
  const appointment = JSON.parse(localStorage.getItem('appointment'));

  if (!appointment) {
    return <div>No appointment found.</div>;
  }

  return (
    <div>
      <h2>Appointment Details</h2>
      <p>Name: {appointment.name}</p>
      <p>Email: {appointment.email}</p>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
    </div>
  );
};

export default AppointmentDetailsPage;



