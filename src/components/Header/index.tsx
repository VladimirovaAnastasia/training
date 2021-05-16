import React from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Header = ({ className = null }) => (
  <div className={cn(styles.root, className)}>
    <div className={styles.wrap}>
      <div className={styles.pokemonLogo}>
        <PokemonLogoSvg />
      </div>
      <div className={styles.menuWrap}>
        {MENU.map(({ id, value: value, link }) => (
          <a key={id} href={link} className={cn(styles.menuLink, { [styles.activeLink]: id === 1 })}>
            {value}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Header;
