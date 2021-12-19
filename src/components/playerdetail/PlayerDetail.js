import React from 'react';
import './PlayerDetail';
import { useState } from 'react';

export default function PlayerDetail({ player, playerDetail = false }) {
  return (
    <div>
      <h3>{player.name}</h3>
      {playerDetail && (
        <>
          <h4>Position: {player.position}</h4>
          <h4>Team: </h4>
        </>
      )}
    </div>
  );
}
