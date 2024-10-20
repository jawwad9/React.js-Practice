// import React, { useRef } from 'react'
// import { auth } from '../config/firebase/firebaseconfig';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const email = useRef();
//     const password = useRef();
//     const navigate = useNavigate();


//     const registerUser = (event) => {
//         event.preventDefault();
//         console.log(email.current.value);
//         console.log(password.current.value);
      

//         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           console.log(user);
//           navigate("/Login");
//         })
//         .catch((error) => {
//           const errorMessage = error.message;
//           console.log(errorMessage);
//         });
//       }
      
      
    
//   return (
//     <>

// {/* <h1>Register</h1> */}
//         {/* <form onSubmit={registerUser}>
//       <input type="email" placeholder='Email' ref={email}/>
//       <input type="password" placeholder='Password' ref={password}/>
//       <button type='sumbit'>Register</button>
//     </form> */}


//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Register your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form action="#" method="POST" className="space-y-6" onSubmit={registerUser}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                  ref={email}
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                 ref={password}
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//               Register
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Register





import React, { useRef } from 'react'

const Register = () => {
  const fullName = useRef()
  const email = useRef()
  const password = useRef()
  const profileImage = useRef()

  const loginUserFromFirebase = async (event) => {
    event.preventDefault()
    console.log(email.current.value)
    console.log(password.current.value)
    console.log(fullName.current.value)
    console.log(profileImage.current.files[0])

  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={loginUserFromFirebase}>
        <input type="text" placeholder='enter your full name' ref={fullName} /> <br /> <br />
        <input type="email" placeholder='enter your email' ref={email} /><br /> <br />
        <input type="password" placeholder='enter your password' ref={password} /><br /> <br />
        <input type="file" placeholder='enter your profile picture' ref={profileImage} /><br /> <br />
        <button type='submit'>register</button>
      </form>
    </div>
  )
}

export default Register