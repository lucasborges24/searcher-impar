import api from './api';

export async function getPokeInfo() {
  const response = await api.get('https://pokeapi.co/api/v2/item');
  return response.data;
}
