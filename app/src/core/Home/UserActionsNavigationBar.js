import React from 'react';
import { Link } from 'react-router-dom';

import styles from './UserActionsNavigationBar.module.css';

const UserActionsNavigationBar = () => (
  <nav className={styles.navigation_bar_container}>
    <Link className={`${styles.navigation_item} ${styles.war_link}`} to="/war">
      Enter War
    </Link>
    <Link className={`${styles.navigation_item} ${styles.create_link}`} to="/transformers/create">
      Create Transformer
    </Link>
  </nav>
);

export default UserActionsNavigationBar;
