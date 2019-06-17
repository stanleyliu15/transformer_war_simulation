import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/NavigationBar.module.css';

const NavigationBar = () => (
  <nav className={styles.navigationbar_container}>
    <Link className={styles.war_navigation_item} to="/war">
      War
    </Link>
    <Link className={styles.create_navigation_item} to="/transformers/create">
      Create
    </Link>
  </nav>
);

export default NavigationBar;
