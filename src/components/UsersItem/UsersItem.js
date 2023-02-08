import React from 'react';
import styles from './UsersItem.module.css';

const UsersItem = (props) => {
  return (
    <li className={styles['user-li']}>
      {props.user} ({props.age} years old)
    </li>
  );
};

export default UsersItem;
