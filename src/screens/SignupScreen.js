import React, { useRef } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
  
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log('User registered:', authUser.user);
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.message);
    }
  };  

  const signIn = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Attempting to sign in with:', emailRef.current.value);
      const authUser = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log('User signed in:', authUser.user);
    } catch (error) {
      console.error('Sign-in error:', error);
      alert(error.message);
    }
  };
  

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
          autoComplete="email"
        />
        <input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          autoComplete="current-password"
        />
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
