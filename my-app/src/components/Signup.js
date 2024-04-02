import React, { Component, useEffect, useState } from 'react';
import styles from './style.css';

function Signup() {
  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ firstnameError, setFirstnameError ] = useState('');
  const [ lastnameError, setLastnameError ] = useState('');
  const [ emailError, setEmailError ] = useState('');
  const [ passwordError, setPasswordError ] = useState('');


  const onChangeFirstnameHandler = (e) => {
    const FirstnameValue = e.target.value;
    setFirstname(FirstnameValue);

    if (FirstnameValue === '') {
      setFirstnameError('First Name cannot be empty.');
      return;
    }
  }

  const onChangeLastnameHandler = (e) => {
    const LastnameValue = e.target.value;
    setLastname(LastnameValue);

    if (LastnameValue === '') {
      setLastnameError('Last Name cannot be empty.');
    }
  }

  const onChangeEmailHandler = (e) => {
    const EmailValue = e.target.value;
    setEmail(EmailValue);

    if (EmailValue === '') {
      setEmailError('Email Address cannot be empty.');
    }
  }

  const onChangePasswordHandler = (e) => {
    const PasswordValue = e.target.value;
    setPassword(PasswordValue);

    if ( PasswordValue === '') {
      setPasswordError('Password cannot be empty.');
    }
  }


  return (
    <div className='signup'>
      <div className="signup_content">
        Try it free 7 days then $20/mo. thereafter
      </div>

      <form className="signup_input">
        <input 
          onChange={onChangeFirstnameHandler}
          className= {`input ${ firstnameError ? 'empty' : ''} `} 
          type="text" 
          value={firstname}
          placeholder="First Name" 
        />
        {firstnameError && <span className='error'>{firstnameError}</span>}

        <input 
          onChange={onChangeLastnameHandler}
          className= {`input ${ lastnameError ? 'empty' : ''} `} 
          type="text" 
          value={lastname}
          placeholder="Last Name" 
        />
        {lastnameError && <span className='error'>{lastnameError}</span>}

        <input 
          onChange={onChangeEmailHandler}
          className= {`input ${ emailError ? 'empty' : ''} `} 
          type="email" 
          value={email}
          placeholder="Email Address" 
        />
        {emailError && <span className='error'>{emailError}</span>}

        <input 
          onChange={onChangePasswordHandler}
          className= {`input ${ passwordError ? 'empty' : ''} `}  
          type="password" 
          value={password}
          placeholder="Password" 
        />
        {passwordError && <span className='error'>{passwordError}</span>}
          
        <button type='submit' className="button">CLAIM YOUR FREE TRIAL</button>
        <p className='explain'>By clicking the button, you are agreeing to our Terms and Services</p>
      </form>
    </div>
  ); 
}

export default Signup;