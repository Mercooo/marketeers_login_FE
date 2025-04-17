// src/App.js
import { useState, useEffect } from "react";
import Login from "components/Login";
import TablePage from "components/TablePage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <main className="min-h-screen">
      {isLoggedIn ? (
        <div>
          <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">Dashboard</h1>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded bg-white text-blue-600 hover:bg-gray-100 transition-colors"
              >
                Logout
              </button>
            </div>
          </header>
          <TablePage />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </main>
  );
}

export default App;