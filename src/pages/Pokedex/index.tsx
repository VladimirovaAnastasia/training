import React from 'react';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import styles from './Pokedex.module.scss';
import Layout from '../../components/Layout';

import pokemons from './pokemons.json';

interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

const PokedexPage: React.FC = () => (
  <div className={styles.root}>
    <Header />
    <Layout className={styles.contentWrap}>
      {pokemons.map((pokemon: IPokemon) => {
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
    </Layout>
  </div>
);

export default PokedexPage;
