import React from 'react';
import PlayerDetail from '../playerdetail/PlayerDetail';
import './PlayerList.css';
import { Link } from 'react-router-dom';

export default function PlayerList({ players }) {
  return (
    <div>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`}>
              <PlayerDetail player={player} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
