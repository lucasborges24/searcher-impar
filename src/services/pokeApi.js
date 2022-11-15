import api from './api';

export async function getPokeInfo(offset, limit) {
  const response = await api.get(`https://pokeapi.co/api/v2/item?offset=${offset}&limit=${limit}`);
  return response.data;
}
