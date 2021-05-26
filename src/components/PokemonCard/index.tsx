import React from 'react';
import { navigate } from 'hookrouter';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';
import { PokemonsRequest } from '../../interface/pokemons';
import { LinkEnum } from '../../routes';

interface IPokemonCard {
  pokemon: PokemonsRequest;
}

const PokemonCard: React.FC<IPokemonCard> = ({ pokemon }) => {
  return (
    <div className={s.root} onClick={() => navigate(LinkEnum.POKEMON, true, { id: pokemon.id }, true)}>
      <div className={s.infoWrap}>
        <Heading type="p" className={s.titleName}>
          {pokemon.name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {pokemon.types.map((item) => (
            <span className={s.label}>{item}</span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
