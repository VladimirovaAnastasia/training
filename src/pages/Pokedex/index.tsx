import React from 'react';
import PokemonCard from '../../components/PokemonCard';
import styles from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import usePokemons from '../../hooks/usePokemons';

const PokedexPage: React.FC = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong...</div>;
  }

  return (
    <div className={styles.root}>
      <Layout className={styles.contentWrap}>
        <Heading type="h3">
          {' '}
          {data.total} <b>Pokemons</b> for you to choose your favorite{' '}
        </Heading>
        <div className={styles.pokemons}>
          {data?.pokemons &&
            data.pokemons.map((pokemon: IPokemon) => {
              return (
                <PokemonCard
                  key={pokemon.id}
                  name={pokemon.name}
                  stats={pokemon.stats}
                  types={pokemon.types}
                  img={pokemon.img}
                />
              );
            })}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
