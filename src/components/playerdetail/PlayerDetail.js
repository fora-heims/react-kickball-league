import React from 'react';
import './PlayerDetail';

export default function PlayerDetail({ player, playerDetail = false }) {
  function teamById(teamId) {
    if (teamId === 1) {
      return 'Bridge City Sneakers';
    } else if (teamId === 2) {
      return 'Stumptown Lumberjacks';
    } else if (teamId === 3) {
      return 'Lakeville Thunderfeet';
    } else if (teamId === 4) {
      return 'Mt. Hoodies';
    } else {
      return 'Vancougers';
    }
  }
  return (
    <div>
      <h3>{player.name}</h3>
      {playerDetail && (
        <>
          <h4>Position: {player.position}</h4>
          <h4>Team: {teamById(player.team_id)}</h4>
        </>
      )}
    </div>
  );
}
