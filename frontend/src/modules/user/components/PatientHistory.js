import React from 'react';

import './style1.css';

const PatientProfile = () => {
  return (
    <div className="profile-container">
      <h1 className="section-heading">Patient Profile</h1>

      <div className="grid-container">
        <div className="card">
          <h2>Personal Information</h2>
          <h4><strong>Name:</strong> sps</h4>
        <h4><strong>Date of Birth:</strong> January 15, 1985</h4>
        <h4><strong>Gender:</strong> Female</h4>
        <h4><strong>Contact Information:</strong></h4>
        <ul>
          <li>Address: rrrrrr</li>
          <li>Phone: (555) 555-1234</li>
          <li>Email: sps@email.com</li>
        </ul>
        </div>

        <div className="card">
          <h2>Medical History</h2>
        </div>

        <div className="card">
          <h2>Medical History</h2>
        </div>

        <div className="card">
          <h2>Medical History</h2>
        </div>

        <div className="card">
          <h2>Medical History</h2>
        </div>

        <div className="card">
          <h2>Medical History</h2>
        </div>


        {/* Add more cards for each section heading */}

        {/* ... Continue adding cards for other section headings ... */}
      </div>
    </div>
  );
};

export default PatientProfile;
