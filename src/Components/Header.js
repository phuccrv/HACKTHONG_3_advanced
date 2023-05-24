import React from 'react';

function HeaderComponent({ players }) {
  const totalPoints = players.reduce((total, player) => total + player.points, 0);

  return (
    <header>
      <div>
        <p>Player: {players.length}</p>
        <p>Total Points: {totalPoints}</p>
      </div>
      <div className="titlePoints">
        <h1>TABLE POINTS</h1>
      </div>
    </header>
  );
}

export default HeaderComponent;
