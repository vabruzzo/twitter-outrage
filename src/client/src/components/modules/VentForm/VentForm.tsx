import React, {
  FunctionComponent,
  useState,
  useContext,
  ChangeEvent,
  FormEvent,
} from 'react';
import { create } from '../../../utils/http';
import Button from '../../elements/Button/Button';
import { SubjectContext } from '../../Subject/Subject';
import styles from './VentForm.module.scss';

interface IVentFormProps {
  setHasSubmitted: () => void;
}

const VentForm: FunctionComponent<IVentFormProps> = ({ setHasSubmitted }) => {
  const [hasError, setHasError] = useState(false);
  const [vent, setVent] = useState('');
  const [ventSubject, setVentSubject] = useState('');
  const subjectId = useContext(SubjectContext);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!vent || !ventSubject) {
      setHasError(true);
      return;
    }

    try {
      await create('vent', {
        text: vent,
        subjectText: ventSubject,
        subjectId,
      });
    } catch {
      setHasError(true);
      return;
    }

    setHasSubmitted();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.error}>
        {hasError &&
          vent &&
          ventSubject &&
          'Oops, something went wrong. Please try again.'}
        {hasError && 'Please fill out all fields before submitting.'}
      </p>
      <label htmlFor="ventSubject" className={styles.label}>
        Subject
      </label>
      <input
        id="ventSubject"
        className={styles.input}
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setVentSubject(event.currentTarget.value);
          setHasError(false);
        }}
      />
      <label htmlFor="vent" className={styles.label}>
        Vent Away!
      </label>
      <textarea
        id="vent"
        className={styles.textarea}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setVent(event.currentTarget.value);
          setHasError(false);
        }}
      />
      <Button text="Submit" type="submit" />
    </form>
  );
};

export default VentForm;
