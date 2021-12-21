import { React, useEffect, useState } from 'react';
import './Players.css';
import PlayerList from '../../components/playerlist/PlayerList.js';
import { getPlayers } from '../../services/players';

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const playersData = await getPlayers(selectedTeam);
      setPlayers(playersData);
    };
    fetchData();
  }, [selectedTeam]);

  return (
    <div>
      <h1>Players</h1>
      <PlayerList
        players={players}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      ></PlayerList>
    </div>
  );
}
