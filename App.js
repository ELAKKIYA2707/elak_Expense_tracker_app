import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  initializeDatabase,
  getCurrentUser,
  logoutUser,
} from "./utils/database";
import "./styles/App.css";

function App() {
  const [currentView, setCurrentView] = useState("login");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize database and check if user is logged in
    initializeDatabase();
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setCurrentView("dashboard");
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentView("dashboard");
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setCurrentView("login");
  };

  const switchView = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="App">
      {currentView === "login" && (
        <Login onLogin={handleLogin} switchView={switchView} />
      )}
      {currentView === "register" && (
        <Register onRegister={handleLogin} switchView={switchView} />
      )}
      {currentView === "dashboard" && user && (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
