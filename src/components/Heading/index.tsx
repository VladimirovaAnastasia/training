import React from 'react';

import styles from './style.module.scss';

interface HeaderProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Heading: React.FC<HeaderProps> = ({ children, type: Type }) => <Type className={styles.root}>{children}</Type>;

export default Heading;
