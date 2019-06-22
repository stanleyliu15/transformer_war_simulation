import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Link className={styles.title_link} to="/">
      Transformers War Simulation
    </Link>
  </header>
);

export default Header;
