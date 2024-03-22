import React, { useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import '../pages/Login.css';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function SignIn({ onSuccess }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin, signinWithGoogle } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
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
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>sign in</h1>
      <div className="google-icon">
        <a href="#" onClick={handleGoogleSignIn}>
          <FcGoogle />
        </a>
      </div>
      <span>or use your email and password to sign in</span>
      {error && <div className="error-message">{error}</div>}
      <input type="email" placeholder="Email" ref={emailRef} />
      <input type="password" placeholder="Password" ref={passwordRef} />
      <Link to="/forgot-password">forgot your password?</Link>
      <button type="submit" disabled={loading}>
        sign in
      </button>
    </form>
  );
}

export default SignIn;
