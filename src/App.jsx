import UserAPI from './UserAPI';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const isLoggedIn = true;

  return (
    <div>
      <h1>React ES6 Lab</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
      <UserList users={users} />
      <Counter />
      <h2>Users from API:</h2>
      <UserAPI />
    </div>
  );
}

export default App;
