import useAsync from './useAsync';
import * as pokeApi from '../../services/pokeApi';

export default function usePoke() {
  const { data: pokes, loading: pokeLoading, error: pokeError, act: getPokes } = useAsync(() => pokeApi.getPokeInfo());

  return {
    pokes,
    pokeLoading,
    pokeError,
    getPokes,
  };
}
