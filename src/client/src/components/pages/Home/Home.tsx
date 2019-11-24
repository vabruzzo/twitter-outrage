import React, { StatelessComponent } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import styles from './Home.module.scss';

interface IHomeProps extends RouteComponentProps {}

const Home: StatelessComponent<IHomeProps> = () => (
  <section className={styles.section}>
    <h2>Digital Outrage Project</h2>
    <p>
      When we perceive that someone has acted out of line with our moral
      perspective, we often experience moral outrage. Moral outrage is a mix of
      anger and disgust that makes us want to blame or punish wrongdoers. While
      moral outrage can benefit our society - for example by deterring bad
      actors and encouraging cooperation - it today’s social media age it seems
      to have gone overboard. For the first time in history we have consistent
      access to content that triggers our outrage on social media, and social
      media platforms often promote engagement with outrage content through the
      design of their platforms.
    </p>
    <p>
      The purpose of this project is to better understand the causes and
      consequences of digital outrage and improve civil discourse in our
      society. It combines crowd-sourcing (input from people like you!) and the
      latest advances in machine-learning.
    </p>
    <h2>Contribute to the project</h2>
    <p>
      We have developed an artificial intelligence called DOC (Digital Outrage
      Classifier). DOC learns to identify moral outrage in social media text and
      becomes more and more accurate as she is given more data. To help DOC
      learn, you can{' '}
      <Link to="/classify">
        <span className={styles.link}>classify</span>
      </Link>{' '}
      some tweets that are pulled from real data and tell DOC if the tweet is
      expressing moral outrage or not. You can also{' '}
      <Link to="/vent">
        <span className={styles.link}>vent</span>
      </Link>{' '}
      about a recent experience that made you morally outraged. Both will help
      DOC learn about moral outrage so we can study it and understand it better.
    </p>
  </section>
);

export default Home;
