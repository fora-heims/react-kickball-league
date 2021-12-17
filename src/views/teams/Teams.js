import { React, useState, useEffect } from 'react';
import './Teams.css';
import TeamList from '../../components/teamlist/TeamList.js';
import getTeams from '../../services/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const teamsData = await getTeams();
      await console.log(teamsData);
      setTeams(teamsData);
    };
    fetchTeams();
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <TeamList {...teams}></TeamList>
    </div>
  );
}
