import React, { StatelessComponent } from 'react';
import styles from './CircleIcon.module.scss';

interface ICircleIconProps {}

const CircleIcon: StatelessComponent<ICircleIconProps> = () => (
  <div className={styles.circle} style={{ backgroundColor: '#a7a7a7' }} />
);

export default CircleIcon;
