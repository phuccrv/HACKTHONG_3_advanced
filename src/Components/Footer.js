import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function FooterComponent({ addPlayer }) {
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleAddPlayer = () => {
    if (playerName.trim() !== '') {
      addPlayer(playerName);
      setPlayerName('');
    }
  };

  return (
    <div className="footer">
      <InputGroup className="mb-5">
        <Form.Control
          placeholder="Enter a player's name"
          value={playerName}
          onChange={handleInputChange}
        />
        <Button id="basic-addon2" onClick={handleAddPlayer}>
          ADD PLAYER
        </Button>
      </InputGroup>
    </div>
  );
}

export default FooterComponent;
