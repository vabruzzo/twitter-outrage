import React, { FunctionComponent, useContext, useRef, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { getDate } from '../../../utils/date';
import { create } from '../../../utils/http';
import Tweet from '../../modules/Tweet/Tweet';
import Button from '../../elements/Button/Button';
import { SubjectContext } from '../../Subject/Subject';
import { Tweet as TweetType } from '../../App/App';
import styles from './Classify.module.scss';

interface IClassifyProps extends RouteComponentProps {
  tweets: TweetType[] | null;
  currentTweet: number;
  setCurrentTweet: () => void;
}

const Classify: FunctionComponent<IClassifyProps> = ({
  tweets,
  currentTweet,
  setCurrentTweet,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const subjectId = useContext(SubjectContext);
  const [hasError, setHasError] = useState(false);

  const handleButtonClick = async (event: any) => {
    setHasError(false);

    try {
      await create('rating', {
        outrageous: event.currentTarget.dataset.outrageous,
        tweetId: event.currentTarget.dataset.tweetId,
        subjectId,
      });
    } catch {
      setHasError(true);
      return;
    }

    if (sectionRef.current) {
      sectionRef.current.focus();
    }

    setCurrentTweet();
  };

  return (
    <section className={styles.section} ref={sectionRef} tabIndex={-1}>
      <h2>Help AI learn how to detect outrage</h2>
      <h3>Is the following social media message expressing moral outrage?</h3>
      {tweets && currentTweet < tweets.length ? (
        <>
          {hasError && (
            <p className={styles.error}>
              Oops, something went wrong. Please try again.
            </p>
          )}
          <Tweet tweet={tweets[currentTweet]} date={getDate()} />
          <div className={styles.buttons}>
            <Button
              text="😒 Not outrageous"
              data-outrageous="false"
              data-tweet-id={tweets[currentTweet].id}
              onClick={handleButtonClick}
            />
            <Button
              text="😾 Outrageous! 😡"
              data-outrageous="true"
              data-tweet-id={tweets[currentTweet].id}
              onClick={handleButtonClick}
            />
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Classify;
