import React, { useRef } from 'react'
import { auth } from '../config/firebase/firebaseconfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();


    const registerUser = (event) => {
        event.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);
      

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/Login");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
      
      
    
  return (
    <>

<h1>Register</h1>


        <form onSubmit={registerUser}>
      <input type="email" placeholder='Email' ref={email}/>
      <input type="password" placeholder='Password' ref={password}/>
      <button type='sumbit'>Register</button>
    </form>

    </>
  )
}

export default Register