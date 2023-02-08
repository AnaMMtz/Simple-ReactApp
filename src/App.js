import Users from 'components/Users';
import UsersList from 'components/UsersList';
import { useState } from 'react';

function App() {
  const [users, setUser] = useState([]);

  const addUserHandler = (user, age) => {
    setUser((prevUser) => {
      return [
        ...prevUser,
        { name: user, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <Users onAddUser={addUserHandler} />
      <UsersList items={users} />
    </div>
  );
}

export default App;
