import './App.css';
import { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  const handleLogout = (e) => {
    e.preventDefault()
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <Dashboard username={username} onLogout={handleLogout} />
        </div>
      )}
    </div>
  );
};


export default App;
