import React, { useEffect } from 'react'
import { auth } from '../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Home = () => {

    const navigate = useNavigate();


    useEffect(() => {
        const checkUser = onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            console.log("Authenticated User UID:", uid);
          } else {
            console.log("User not signed in");
            navigate("/Login")
          }
        });
      }, []);


      const logoutUser = () => {
        const user = signOut(auth).then(() => {
         console.log(user);
          }).catch((error) => {
            navigate("/Login")
          });
      }


      

  return (
    <>
        <div>Home</div>
        <button onClick={logoutUser}>Logout</button>
        </>
  )
}

export default Home