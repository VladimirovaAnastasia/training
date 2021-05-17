import React from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  is100Width?: boolean;
  color?: 'color-green' | 'color-yellow';
  size?: 'size-big' | 'size-small';
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'color-green',
  size = 'size-big',
  is100Width = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={cn(styles.root, styles[color], styles[size], { [styles.is100Width]: is100Width })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
