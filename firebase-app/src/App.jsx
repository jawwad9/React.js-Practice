import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App






// import React, { useRef } from 'react'
// import { auth } from './config/firebase/firebaseconfig';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// const App = () => {

//   const email = useRef();
//   const password = useRef();



// firebase login



// const loginUser = (event) => {
//   event.preventDefault()
//   console.log(email.current.value);
//   console.log(password.current.value);
//   signInWithEmailAndPassword(auth, email.current.value, password.current.value)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorMessage = error.message;
//     console.log(errorMessage);
    
//   });

// }


// firebase register 

// const registerUser = (event) => {
//   event.preventDefault();
//   console.log(email.current.value);
//   console.log(password.current.value);

//   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user);
    
//   })
//   .catch((error) => {
//     const errorMessage = error.message;
//     console.log(errorMessage);
    
//   });
// }


// firebase onAuthStateChanged 


// const checkUser = onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     console.log("Authenticated User UID:", uid);
//   } else {
//     console.log("User not signed in");
//     navigate("/Login")
//   }
// });



// firebase logout


// const logoutUser = () => {
//   const user = signOut(auth).then(() => {
//    console.log(user);
//     }).catch((error) => {
//       navigate("/Login")
//     });
// }


//   return (

//     <>
//     <h1>Login</h1>
//     <form onSubmit={loginUser}>
//     <input type="email" placeholder='Email' ref={email}/>
//     <input type="password" placeholder='Password' ref={password}/>
//       <button type='sumbit'>Login</button>
//     </form>

//     <h1>Register</h1>

//     <form onSubmit={registerUser}>
//       <input type="email" placeholder='Email' ref={email}/>
//       <input type="password" placeholder='Password' ref={password}/>
//       <button type='sumbit'>Register</button>
//     </form>

        //  <button onClick={logoutUser}>Logout</button>
//     </>
//   )
// }

// export default App;