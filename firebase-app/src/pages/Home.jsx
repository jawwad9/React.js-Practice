import React, { useEffect, useRef, useState } from 'react'
import { auth, db  } from '../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, getDocs, Timestamp  } from "firebase/firestore"; 


const Home = () => {

    const navigate = useNavigate();
    const title = useRef();
    const dec = useRef();
    const [storeData, setStoreData] = useState([]);


// firebase  onAuthStateChanged

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


//  firebade firestore and manual render data

    const todoTitle = async (event) => {
        event.preventDefault();
        console.log(title.current.value);
        console.log(dec.current.value);
        // console.log(auth.currentUser.uid);
        try {
            const docRef = await addDoc(collection(db, "store"), {
              title: title.current.value,
              dec: dec.current.value,
              uid: auth.currentUser.uid,
              postDate: Timestamp.fromDate(new Date()),

            })
            storeData.push({
                title: title.current.value,
                dec: dec.current.value,
                uid: auth.currentUser.uid
              });        
              setStoreData([...storeData]);
              console.log(storeData);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        
    }



 // firebase render data  
 
async function renderDate() {
    const querySnapshot = await getDocs(collection(db, "store"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      storeData.push(doc.data());
    });
     }



     useEffect(() => {
        renderDate(); // Call the async function on component mount
        setStoreData(storeData);      

    }, [])    
  return (
        <>


        <h1>Home</h1>
        <form onSubmit={todoTitle}>
            <input type="text" placeholder='Enter your Text' ref={title}/>
            <input type="text" placeholder='Enter your Text' ref={dec}/>
            <button type='sumbit'>Click</button>
        </form>
        {
            storeData.map((item) => {
                return <div key={item.uid}>
                    <h1>{item.title}</h1>
                    <h1>{item.dec}</h1>
                    <h1>{item.uid}</h1>
                </div>
            })
        }<br></br>
        </>
  )
}

export default Home