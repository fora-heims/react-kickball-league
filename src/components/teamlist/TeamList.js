import React from 'react';
import { Link } from 'react-router-dom';
import TeamDetail from '../teamdetail/TeamDetail.js';
import './TeamList.css';

export default function TeamList({ teams }) {
  return (
    <div className="">
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>
              <TeamDetail team={team} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
