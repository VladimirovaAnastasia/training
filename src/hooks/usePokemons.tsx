import { useEffect, useState } from 'react';
import req from '../utils/request';

interface IPokemonsData {
  total?: number;
  pokemons?: IPokemon[];
}

const usePokemons = () => {
  const [data, setData] = useState<IPokemonsData>({});
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true);
      try {
        const result = await req('getPokemons');
        setData(result);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default usePokemons;
