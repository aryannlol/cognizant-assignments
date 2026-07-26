import React from 'react';

export const ListofPlayers = () => {
  const players = [
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 85 },
    { name: 'Virat', score: 65 },
    { name: 'Rohit', score: 75 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Hardik', score: 55 },
    { name: 'Jadeja', score: 80 },
    { name: 'Bumrah', score: 30 },
    { name: 'Shami', score: 25 },
    { name: 'Siraj', score: 15 },
    { name: 'Kuldeep', score: 20 }
  ];
  const highScorers = players.filter(p => p.score >= 70);
  return (
    <div>
      <h3>Players with Score 70 and Above</h3>
      <ul>
        {highScorers.map((p, index) => <li key={index}>{p.name} : {p.score}</li>)}
      </ul>
    </div>
  );
};
