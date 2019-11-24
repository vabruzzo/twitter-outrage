import React, { StatelessComponent, MouseEvent } from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  onClick?: (event: MouseEvent) => void;
  text: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button: StatelessComponent<IButtonProps> = ({
  onClick,
  text,
  type,
  ...rest
}) => (
  <button className={styles.button} onClick={onClick} type={type} {...rest}>
    {text}
  </button>
);

export default Button;
