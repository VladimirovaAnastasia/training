import React from 'react';
import styles from './Empty.module.scss';
import Heading from '../../components/Heading';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => (
  <div className={styles.root}>
    <Heading type="p">This is {title} page</Heading>
  </div>
);

export default EmptyPage;
