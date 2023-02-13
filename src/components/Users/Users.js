import Button from 'components/Button';
import React, { useState, useRef } from 'react';
import styles from './Users.module.css';
import Card from 'components/Card/Card';
import Modal from 'components/Modal';

const Users = (props) => {
  const enteredName = useRef();
  const enteredAge = useRef();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const userName = enteredName.current.value;
    const userAge = enteredAge.current.value;
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    if (+userAge <= 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }

    props.onAddUser(userName, userAge);
    enteredName.current.value = ''; //this is used only to reset the value
    enteredAge.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.mainbox}>
        <form className={styles.mainbox} onSubmit={submitHandler}>
          <div className={styles.form}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              ref={enteredName}
            />
          </div>
          <div className={styles.form}>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder="Age" ref={enteredAge} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default Users;
