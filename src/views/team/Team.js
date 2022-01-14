import { React, useState, useEffect } from 'react';
import './Team.css';
import TeamDetail from '../../components/teamdetail/TeamDetail.js';
import { getTeam } from '../../services/teams';

export default function Team(props) {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;
  useEffect(() => {
    const fetchTeam = async () => {
      const teamData = await getTeam(id);
      setTeam(teamData);
      setLoading(false);
    };
    fetchTeam();
  }, [id]);
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <TeamDetail team={team[0]} showDetail></TeamDetail>
    </div>
  );
}
