import React from 'react';
import { Link } from 'components';
import styles from './notFound.module.scss';

const NotFound = () => (
  <div className={styles.container}>
    <img
      className={styles.image}
      src={`${process.env.PUBLIC_URL}/img/missingno.png`}
      alt="Not found"
    />
    <h1 className={styles.title}>Uh-oh!</h1>
    <p className={styles.body}>We couldn't catch that Pokémon.</p>
    <Link to="/">Viem 'em all</Link>
  </div>
);

export default NotFound;
