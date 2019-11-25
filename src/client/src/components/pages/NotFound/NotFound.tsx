import React, { StatelessComponent, Fragment } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import styles from './About.module.scss';

interface INotFoundProps extends RouteComponentProps {}

const NotFound: StatelessComponent<INotFoundProps> = () => (
  <section className={styles.section}>
    <h2>Not Found</h2>
    <p>
      To help our Digital Outrage Classifier learn, you can{' '}
      <Link to="/classify">
        <span className={styles.link}>classify</span>
      </Link>{' '}
      some tweets that are pulled from real data. You can also{' '}
      <Link to="/vent">
        <span className={styles.link}>vent</span>
      </Link>{' '}
      about a recent experience that made you morally outraged.
    </p>
  </section>
);

export default NotFound;
