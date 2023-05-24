import React from 'react';
import { BiX } from 'react-icons/bi';
import { CgCrown } from 'react-icons/cg';
import Button from 'react-bootstrap/Button';

function BodyComponent({ players, onDeletePlayer, onDecreasePoints, onIncreasePoints }) {
  const handleDeletePlayer = (playerId) => {
    onDeletePlayer(playerId);
  };

  const handleDecreasePoints = (playerId) => {
    onDecreasePoints(playerId);
  };

  const handleIncreasePoints = (playerId) => {
    onIncreasePoints(playerId);
  };

  return (
    <div className="bodyComponent">
      {players.map((player) => (
        <div key={player.id}>
          <div className="button-del" onClick={() => handleDeletePlayer(player.id)}>
            <BiX />
          </div>
          <div>
            <CgCrown />
          </div>

          <span className="play-name">{player.name}</span>
          <div className="All-button">
            <Button variant="dark" onClick={() => handleDecreasePoints(player.id)}>
              -
            </Button>
            <span>{player.points}</span>
            <Button variant="dark" onClick={() => handleIncreasePoints(player.id)}>
              +
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BodyComponent;
