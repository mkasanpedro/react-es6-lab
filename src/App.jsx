import UserList from './UserList';
import Counter from './Counter'; // import it

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const isLoggedIn = true;

  return (
    <div>
      <h1>React ES6 Lab</h1>

      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}

      <UserList users={users} />
      <Counter /> {/* render it here */}
    </div>
  );
}

export default App;
