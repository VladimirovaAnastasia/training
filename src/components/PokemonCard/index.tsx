import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCard {
  name: string;
  stats: any;
  types: string[];
  img: string;
}

const PokemonCard: React.FC<IPokemonCard> = ({ name, stats, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="p" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((item) => (
            <span className={s.label}>{item}</span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
