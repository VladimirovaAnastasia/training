import React from 'react';
import styles from './Home.module.scss';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

const HomePage = () => (
  <div className={styles.root}>
    <Header />
    <Layout className={styles.contentWrap}>
      <div className={styles.contentText}>
        <Heading type="h1">
          <b>Find</b> all your favorite <b>Pokemon </b>
        </Heading>
        <Heading type="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
        <Button onClick={() => console.log('onClick')}>See pokemons</Button>
      </div>
      <div className={styles.contentParallax}>
        <Parallax />
      </div>
    </Layout>
  </div>
);

export default HomePage;
