import React from 'react';
import './Players.css';
import PlayerList from '../../components/playerlist/PlayerList.js';

export default function Players() {
  return (
    <div>
      <h1>Players</h1>
      <PlayerList></PlayerList>
    </div>
  );
}
