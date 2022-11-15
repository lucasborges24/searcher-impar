import useAsync from './useAsync';
import * as pokeApi from '../../services/pokeApi';

export default function usePoke(offset, limit) {
  const { data: pokes, loading: pokeLoading, error: pokeError, act: getPokes } = useAsync(() => pokeApi.getPokeInfo(offset, limit));

  return {
    pokes,
    pokeLoading,
    pokeError,
    getPokes,
  };
}
