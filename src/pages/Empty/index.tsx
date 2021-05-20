import React from 'react';
import styles from './Empty.module.scss';
import Header from '../../components/Header';
import Heading from '../../components/Heading';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => (
  <div className={styles.root}>
    <Header />
    <Heading type="p">This is {title} page</Heading>
  </div>
);

export default EmptyPage;
