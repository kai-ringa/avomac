import React, { useState } from 'react';
import './Login.css';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const toggleSignUp = () => {
    setIsSignUp(true);
  };

  const toggleSignIn = () => {
    setIsSignUp(false);
  };

  const handleSignUpSuccess = () => {
    navigate('/home');
  };

  const handleSignInSuccess = () => {
    navigate('/home');
  };

  return (
    <>
      <div className="main">
        <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
          <div className="form-container sign-up">
            <SignUp onSuccess={handleSignUpSuccess} />
          </div>
          <div className="form-container sign-in">
            <SignIn onSuccess={handleSignInSuccess} />
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div
                className={`toggle-panel toggle-left ${
                  !isSignUp ? 'active' : ''
                }`}
              >
                <h1>welcome back!</h1>
                <p>enter your personal details to use all of site features</p>
                <button className="hidden" id="login" onClick={toggleSignIn}>
                  sign in
                </button>
              </div>
              <div
                className={`toggle-panel toggle-right ${
                  isSignUp ? 'active' : ''
                }`}
              >
                <h1>hello!</h1>
                <p>
                  register with your personal details to use all of site
                  features
                </p>
                <button className="hidden" id="register" onClick={toggleSignUp}>
                  sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
