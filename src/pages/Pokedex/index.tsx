import React, { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import styles from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import useData from '../../hooks/getData';
import { IPokemonsData, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hooks/useDebounce';

interface IQuery {
  name?: string;
}

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 1000);

  const { data, isLoading, isError } = useData<IPokemonsData>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((prev: IQuery) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Something wrong...</div>;
  }

  return (
    <div className={styles.root}>
      <Layout className={styles.contentWrap}>
        <Heading type="h3">
          {' '}
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite{' '}
        </Heading>
        <div className={styles.search}>
          <input type="text" placeholder="Encuentra tu pokémon..." value={searchValue} onChange={handleSearchChange} />
        </div>
        <div className={styles.pokemons}>
          {!isLoading &&
            data &&
            data.pokemons.map((pokemon: PokemonsRequest) => {
              return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
            })}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
