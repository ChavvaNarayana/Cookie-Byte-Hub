import React, { useState } from 'react';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import "./index.css"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [userData, setUserData] = useState({});

  const handleRegister = (data) => {
    setIsRegistering(false);
    setUserData(data);
    alert("Registration successful! Please login to continue.");
  };

  const handleLogin = (data) => {
    if (data.email === userData.email && data.password === userData.password) {
      setIsLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          {isRegistering ? (
            <RegisterPage onRegister={handleRegister} />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )}
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Switch to Login" : "Switch to Register"}
          </button>
        </>
      ) : (
        <>
          <center >
            <h1>Welcome, {userData.name}!</h1>
            <h2>Email: {userData.email}</h2>
            <h2>Username: {userData.username}</h2>
            <h2>Date of Birth: {userData.dob}</h2>
          </center>

        </>
      )}
    </div>
  );
};

export default App;

