import { client, checkError } from './client.js';

export default async function getTeams() {
  let request = await client.from('teams');
  return checkError(request);
}
