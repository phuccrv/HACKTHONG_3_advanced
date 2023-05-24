import React, { useState } from 'react';
import './App.css';
import BodyComponent from './Components/Body';
import FooterComponent from './Components/Footer';
import HeaderComponent from './Components/Header';

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (name) => {
    const newPlayer = {
      id: players.length + 1,
      name: name,
      points: 0,
    };

    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = (playerId) => {
    const updatedPlayers = players.filter((player) => player.id !== playerId);
    setPlayers(updatedPlayers);
  };

  const decreasePoints = (playerId) => {
    const updatedPlayers = players.map((player) => {
      if (player.id === playerId) {
        const newPoints = Math.max(0, player.points - 1); // Limit the points to a minimum of 0
        return {
          ...player,
          points: newPoints,
        };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };
  

  const increasePoints = (playerId) => {
    const updatedPlayers = players.map((player) => {
      if (player.id === playerId) {
        return {
          ...player,
          points: player.points + 1,
        };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  return (
    <>
      <HeaderComponent players={players} />
      <BodyComponent
        players={players}
        onDeletePlayer={deletePlayer}
        onDecreasePoints={decreasePoints}
        onIncreasePoints={increasePoints}
      />
      <FooterComponent addPlayer={addPlayer} />
    </>
  );
}

export default App;
