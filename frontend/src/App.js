import React, { useState } from 'react';
import Login from './components/Login';
import TablePage from './components/TablePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <TablePage /> : <Login onLogin={() => setIsLoggedIn(true)} />;
}

export default App;
