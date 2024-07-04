// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Cookies.set('user', email, { expires: 1 });
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setShowForgotPassword(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        <p onClick={() => setShowForgotPassword(true)}>Forgot Password?</p>
      </form>

      {showForgotPassword && (
        <div className="forgot-password-popup">
          <form onSubmit={handleForgotPassword}>
            <h2>Reset Password</h2>
            <input
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Reset Password</button>
            <button onClick={() => setShowForgotPassword(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
