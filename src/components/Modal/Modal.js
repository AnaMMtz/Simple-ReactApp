import Button from 'components/Button';
import Card from 'components/Card/Card';
import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.btn}>
          <Button onClick={props.onConfirm}>Close</Button>
        </footer>
      </Card>
    </>
  );
};

export default Modal;
