import React, { useRef, useState } from 'react';
import './ForgotPassword.css';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const emailRef = useRef();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    if (!email || !email.includes('@')) {
      return setError('Please enter a valid email address.');
    }

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Check your email for further instructions');
    } catch (error) {
      setError('Failed to reset password. Please try again.');
    }

    setLoading(false);
  }

  return (
    <div className="main">
      <div className="f-container">
        <form onSubmit={handleSubmit} className="form">
          <h1>password reset</h1>
          {error && <div className="error-message">{error}</div>}
          {message && <div className="message">{message}</div>}
          <input
            type="email"
            placeholder="Enter Your Email"
            ref={emailRef}
            required
          />
          <Link to="/login">login</Link>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'reset password'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
