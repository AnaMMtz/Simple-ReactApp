import Card from 'components/Card/Card';
import UsersItem from 'components/UsersItem';
import React from 'react';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={styles.box}>
      <div className={styles.box}>
        <ul className={styles['users-list']}>
          {props.items.map((user, index) => (
            <UsersItem key={user.id} user={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UsersList;
