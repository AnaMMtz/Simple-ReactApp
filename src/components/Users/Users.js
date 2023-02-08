import Button from 'components/Button';
import React, { useState } from 'react';
import styles from './Users.module.css';
import Card from 'components/Card/Card';
import Modal from 'components/Modal';

const Users = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    if (+age <= 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    console.log(username, age);
    const usersData = {
      name: username,
      age: age,
    };

    props.onAddUser(username, age);
    setUsername('');
    setAge('');
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
              value={username}
              onChange={handleUsername}
              placeholder="Username"
            />
          </div>
          <div className={styles.form}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Age"
              value={age}
              onChange={handleAge}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default Users;
