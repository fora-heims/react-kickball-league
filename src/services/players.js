import { client, checkError } from './client.js';

export async function getPlayers(teamId) {
  if (teamId === 'all') {
    let request = await client.from('players');
    return checkError(request);
  } else {
    let request = await client.from('players').select('*').match({ team_id: teamId });
    return checkError(request);
  }
}

export async function getPlayer(id) {
  let request = await client.from('players').select('*').match({ id: id });
  return checkError(request);
}
