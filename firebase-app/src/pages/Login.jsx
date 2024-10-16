import React, { useRef } from 'react'
import { auth } from '../config/firebase/firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();




const loginUser = (event) => {
  event.preventDefault()
  console.log(email.current.value);
  console.log(password.current.value);
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/Home");
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });

}

  return (
    <>
        <h1>Login</h1>
    <form onSubmit={loginUser}>
    <input type="email" placeholder='Email' ref={email}/>
    <input type="password" placeholder='Password' ref={password}/>
      <button type='sumbit'>Login</button>
    </form>

    </>
  )
}

export default Login