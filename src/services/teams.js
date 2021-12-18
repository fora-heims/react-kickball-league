import { client, checkError } from './client.js';

export async function getTeams() {
  let request = await client.from('teams');
  return checkError(request);
}

export async function getTeam(id) {
  let request = await client.from('teams').select('*, players(*)').match({ id });
  return checkError(request);
}
