import { React, useEffect, useState } from 'react';
import './Players.css';
import PlayerList from '../../components/playerlist/PlayerList.js';
import { getPlayers } from '../../services/players';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const playersData = await getPlayers();
      setPlayers(playersData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Players</h1>
      <PlayerList players={players}></PlayerList>
    </div>
  );
}
