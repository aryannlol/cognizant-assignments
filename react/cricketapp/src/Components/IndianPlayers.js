import React from 'react';

export const IndianPlayers = () => {
  const T20players = ['Rohit', 'Virat', 'Suryakumar'];
  const RanjiTrophy = ['Pujara', 'Rahane', 'Hanuma'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];
  const [p1, p2, p3, p4, p5, p6] = mergedPlayers;
  return (
    <div>
      <h3>Indian Players Listing</h3>
      <p>Odd Players: {p1}, {p3}, {p5}</p>
      <p>Even Players: {p2}, {p4}, {p6}</p>
      <h4>Merged Squad:</h4>
      <ul>
        {mergedPlayers.map((player, i) => <li key={i}>{player}</li>)}
      </ul>
    </div>
  );
};
