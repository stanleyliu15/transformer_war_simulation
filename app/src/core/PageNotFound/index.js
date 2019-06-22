import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PageNotFound.module.css';

const PageNotFound = () => (
  <div className={styles.page_not_found_container}>
    <h1 className={styles.page_not_found_title}>Oops. We hit a dead end.</h1>
    <Link className={styles.page_not_found_home_link} to="/">
      Go Home
    </Link>
  </div>
);

export default PageNotFound;
