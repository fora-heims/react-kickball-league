import { client, checkError } from './client.js';

export async function getPlayers() {
  let request = client.from('players').select('*').order('name');
  return checkError(request);
}
