import React, { useRef } from 'react'
import { auth } from './config/firebase/firebaseconfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const App = () => {

  const email = useRef();
  const password = useRef();



const loginUser = (event) => {
  event.preventDefault()
  console.log(email.current.value);
  console.log(password.current.value);
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });

}



const registerUser = (event) => {
  event.preventDefault();
  console.log(email.current.value);
  console.log(password.current.value);

  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    
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

    <h1>Register</h1>

    <form onSubmit={registerUser}>
      <input type="email" placeholder='Email' ref={email}/>
      <input type="password" placeholder='Password' ref={password}/>
      <button type='sumbit'>Register</button>
    </form>

      <button type='sumbit'>logout</button>
    </>
  )
}

export default App;