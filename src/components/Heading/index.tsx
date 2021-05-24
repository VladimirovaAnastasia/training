import React from 'react';

import classnames from 'classnames';
import styles from './style.module.scss';

interface HeaderProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
}

const Heading: React.FC<HeaderProps> = ({ children, type: Type, className }) => (
  <Type className={classnames(styles.root, className)}>{children}</Type>
);

export default Heading;
