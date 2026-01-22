import UserList from './UserList';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>React ES6 Lab</h1>
      <p>User List:</p>
      <UserList users={users} />
    </div>
  );
}

export default App;
