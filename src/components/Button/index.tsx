import React from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFullWidth?: boolean;
  color?: 'green' | 'yellow';
  size?: 'big' | 'small';
}

const Button: React.FC<ButtonProps> = ({ children, color = 'green', size = 'big', isFullWidth = false, onClick }) => {
  return (
    <button
      type="button"
      className={cn(styles.root, styles[color], styles[size], { [styles.fullWidth]: isFullWidth })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
