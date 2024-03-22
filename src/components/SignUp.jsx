import React, { useState, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';
import '../pages/Login.css';
import { useAuth } from '../contexts/AuthContext';

function SignUp({ onSuccess }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, signinWithGoogle } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      onSuccess();
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  async function handleGoogleSignIn() {
    try {
      setError('');
      setLoading(true);
      await signinWithGoogle();
      onSuccess();
    } catch (error) {
      console.log(error.message);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>create account</h1>
      <div className="google-icon">
        <a href="#" className="icon" onClick={handleGoogleSignIn}>
          <FcGoogle />
        </a>
      </div>
      <span>or use your email for registration</span>
      {error && <div className="error-message">{error}</div>}
      <input type="email" placeholder="Email" ref={emailRef} required />
      <input
        type="password"
        placeholder="Password"
        ref={passwordRef}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        ref={confirmPasswordRef}
        required
      />
      <button type="submit" disabled={loading}>
        sign up
      </button>
    </form>
  );
}

export default SignUp;
