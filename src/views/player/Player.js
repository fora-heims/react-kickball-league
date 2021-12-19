import { React, useState, useEffect } from 'react';
import './Player.css';
import PlayerDetail from '../../components/playerdetail/PlayerDetail.js';
import { getPlayer } from '../../services/players';

export default function Player(props) {
  const id = props.match.params.id;
  const [player, setPlayerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getPlayer(id);
      setPlayerData(resp);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <PlayerDetail player={player[0]}></PlayerDetail>
    </div>
  );
}
