import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import styles from './style.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';

const Header = ({ className = null }) => {
  const path = usePath();

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.wrap}>
        <div className={styles.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={styles.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A key={title} href={link} className={cn(styles.menuLink, { [styles.activeLink]: link === path })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
