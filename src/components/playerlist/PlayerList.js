import React from 'react';
import PlayerDetail from '../playerdetail/PlayerDetail';
import './PlayerList.css';
import { Link } from 'react-router-dom';

export default function PlayerList({ players, setSelectedTeam, selectedTeam }) {
  return (
    <div>
      <label>
        Team:
        <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
          <option value="all">All Teams</option>
          <option value="1">Bridge City Sneakers</option>
          <option value="2">Stumptown Lumberjacks</option>
          <option value="3">Lakeville Thunderfeet</option>
          <option value="5">Vancougers</option>
          <option value="4">Mt. Hoodies</option>
        </select>
      </label>
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
