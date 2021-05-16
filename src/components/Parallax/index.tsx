import React, { useEffect, useState } from 'react';

import styles from './style.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PokemonPng from './assets/Pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <div className={styles.root}>
      <div
        className={styles.smallPokeBall}
        style={{
          transform: `translate(${screenY ** 0.05}px, ${screenX * 0.05}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={styles.cloud}
        style={{
          transform: `translate(${screenY ** 0.04}px, ${screenX * 0.04}px)`,
        }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={styles.cloudBig}
        style={{
          transform: `translate(${screenY ** 0.03}px, ${screenX * 0.03}px)`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>
      <div
        className={styles.pokeBall}
        style={{
          transform: `translate(${screenY ** 0.02}px, ${screenX * 0.02}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={styles.pikachu}
        style={{
          transform: `translate(${screenY ** 0.01}px, ${screenX * 0.01}px)`,
        }}>
        <img src={PokemonPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
