import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)

  return <div className='loginScreen'>
    <div className='loginScreen__background'>
        <img
         className="loginScreen__logo"
         src="https://imgs.search.brave.com/p2dnJu9xTvt-kDUB8Ywy71Jp7-5II3ebNbAx0mVkp4A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvbmV0/ZmxpeC0yLWxvZ28t/cG5nLXRyYW5zcGFy/ZW50LnBuZw"
         alt=""
         />
         <button onClick={() => setSignIn(true)}
          className='loginScreen__button'
         
         >Sign In</button>

         <div className="loginScreen__gradient" />
    </div>

    <div className="loginScreen__body">
        {signIn ? (
            <SignupScreen />
        ): (
            <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
    
            <div className="loginScreen__input">
                <form>
                    <input type='email' placeholder='Email Address'/>
                    <button
                     onClick={() => setSignIn(true)}
                     className='loginScreen__getStarted'>
                        GET STARTED
                    </button>
                </form>
            </div>
            </>
        )}

    </div>

  </div>
}

export default LoginScreen