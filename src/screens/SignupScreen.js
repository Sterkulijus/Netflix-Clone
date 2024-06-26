import React, {useRef} from 'react';
import './SignupScreen.css';
import {auth} from '../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
function SignupScreen() {
const emailRef = useRef(null);
const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,        
            emailRef.current.value,
            passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser)
            })
            .catch(error => {
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,        
            emailRef.current.value,
            passwordRef.current.value) .then((authUser) => {
                console.log(authUser)
            })
            .catch(error => {
                alert(error.message);
            });
            
    }

  return (
  <div className='signupScreen'>
    <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Passowrd' type='password' />
        <button type='submit' onClick={(signIn)}>Sign In</button>
        <button type='submit' onClick={(register)}>Sign Up</button>
    </form>

  </div>
  );
}

export default SignupScreen;
