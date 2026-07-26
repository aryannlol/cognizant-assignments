import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => (decimal * 100).toFixed(2) + '%';

const calcScore = (total, goal) => percentToDecimal(total / goal);

export const CalculateScore = ({ Name, School, Total, Goal }) => {
  return (
    <div className=" score-box\>
 <h2>Student Score Details</h2>
 <p><strong>Name:</strong> {Name}</p>
 <p><strong>School:</strong> {School}</p>
 <p><strong>Total Marks:</strong> {Total}</p>
 <p><strong>Goal Marks:</strong> {Goal}</p>
 <p><strong>Score:</strong> {calcScore(Total, Goal)}</p>
 </div>
 );
};
