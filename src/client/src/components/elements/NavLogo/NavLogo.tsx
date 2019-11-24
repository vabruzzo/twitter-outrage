import React, { StatelessComponent } from 'react';
import { Link } from '@reach/router';
import styles from './NavLogo.module.scss';

const NavLogo: StatelessComponent = () => (
  <h1 className={styles.logo}>
    <Link to="/" className={styles.link}>
      <span className={styles.emoticon}>&#128545;</span> Digital Outrage Project
    </Link>
  </h1>
);

export default NavLogo;
