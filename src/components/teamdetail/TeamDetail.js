7;
import React from 'react';
import './TeamDetail.css';
import { Link } from 'react-router-dom';

export default function TeamDetail({ team, showDetail = false }) {
  return (
    <div>
      <h3>{team.name}</h3>
      {showDetail && (
        <>
          <h4>
            Location: {team.city}, {team.state}
          </h4>
          <h4>Players:</h4>
          <ul>
            {team.players.map((player) => (
              <li key={player.id}>
                <Link to={`/players/${player.id}`}>{player.name}</Link>
                <h5>Position: {player.position}</h5>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
