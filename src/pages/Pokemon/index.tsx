import React from 'react';
import styles from './Pokemon.module.scss';
import Heading from '../../components/Heading';

export interface PokemonProps {
  id?: string | number;
}

const mockPokemon = {
  name_clean: 'bulbasaur',
  abilities: ['blaze', 'solar-power'],
  base_experience: 240,
  height: 17,
  id: 6,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  is_default: true,
  name: 'charizard',
  order: 7,
  stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
  types: ['fire', 'flying'],
  weight: 905,
};

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  return (
    <div className={styles.root}>
      <div className={styles.contentBlock}>
        <div className={styles.close} />
        <div className={styles.pictureWrap}>
          <img src={mockPokemon.img} alt={mockPokemon.name} />
          <div className={styles.labelWrap}>
            {mockPokemon.types.map((item) => (
              <span className={styles.label}>{item}</span>
            ))}
          </div>
        </div>
        <div className={styles.infoWrap}>
          <div className={styles.infoHeader}>
            <Heading type="h3" className={styles.titleName}>
              {mockPokemon.name[0].toUpperCase() + mockPokemon.name.slice(1)}
            </Heading>
            <div className={styles.titleInfo}>
              <Heading type="h4" className={styles.titleName}>
                Generation 1
              </Heading>
              <div className={styles.infoHeaderPoint}>{mockPokemon.base_experience}</div>
            </div>
          </div>
          <div className={styles.abilitiesBlock}>
            <Heading type="p">Abilities</Heading>
            <div className={styles.abilitiesText}>
              <Heading type="p">Overgrow -</Heading>
              <Heading type="p">Chlorophyll</Heading>
            </div>
          </div>
          <div className={styles.propertiesBlock}>
            <div className={styles.propertiesBlockItem}>
              <Heading type="p">Healthy Points</Heading>
              <Heading type="p">
                <b>100000</b>
              </Heading>
              <div className={styles.propertiesBlockItemProgress}>
                <div style={{ width: '60%' }} className={styles.propertiesBlockItemProgressHealth} />
              </div>
            </div>
            <div className={styles.propertiesBlockItem}>
              <Heading type="p">Experience</Heading>
              <Heading type="p">
                <b>{mockPokemon.base_experience}</b>
              </Heading>
              <div className={styles.propertiesBlockItemProgress}>
                <div style={{ width: '60%' }} className={styles.propertiesBlockItemProgressExperience} />
              </div>
            </div>
          </div>
          <div className={styles.statsBlock}>
            <div className={styles.statsBlockItem}>
              <div className={styles.statsBlockItemPoint}>{mockPokemon.stats.defense}</div>
              <p className={styles.statsBlockItemText}>Defense</p>
            </div>
            <div className={styles.statsBlockItem}>
              <div className={styles.statsBlockItemPoint}>{mockPokemon.stats.attack}</div>
              <p className={styles.statsBlockItemText}>Attack</p>
            </div>
            <div className={styles.statsBlockItem}>
              <div className={styles.statsBlockItemPoint}>{mockPokemon.stats.specialAttack}</div>
              <p className={styles.statsBlockItemText}>Sp Attack</p>
            </div>
            <div className={styles.statsBlockItem}>
              <div className={styles.statsBlockItemPoint}>{mockPokemon.stats.specialDefense}</div>
              <p className={styles.statsBlockItemText}>Sp Defense</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
