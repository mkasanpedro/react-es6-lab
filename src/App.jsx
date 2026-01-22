import { useState } from 'react';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <h1>React ES6 Lab</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>

      <UserList users={users} />
      <Counter />
      <h2>Users from API:</h2>
      <UserAPI />
    </div>
  );
}

export default App;
