import { client, checkError } from './client.js';

export async function getPlayers() {
  let request = await client.from('players');
  return checkError(request);
}

export async function getPlayer(id) {
  let request = await client.from('players').select('*').match({ id: id });
  return checkError(request);
}
