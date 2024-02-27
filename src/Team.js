// src/Team.js
import React from 'react';
import './Team.css';

const teamMembers = [
  { id: 1, name: 'John Doe', position: 'CEO', image: 'images/john-doe.jpg' },
  { id: 2, name: 'Jane Smith', position: 'COO', image: 'images/jake-smith.jpg' }, // Corrected file name
  // Add more team members as needed
];

const Team = () => (
  <div className="team-container">
    <h2>Meet the Team</h2>

    <div className="team-members">
      {teamMembers.map((member) => (
        <div key={member.id} className="team-member">
          <img src={process.env.PUBLIC_URL + '/' + member.image} alt={member.name} />
          <div className="member-info">
            <p>{member.name}</p>
            <span>{member.position}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
