import React, { useEffect, useRef } from 'react'
import { auth, db  } from '../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore"; 


const Home = () => {

    const navigate = useNavigate();
    const title = useRef();
    const dec = useRef();


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


//  firebade firestore

    const todoTitle = async (event) => {
        event.preventDefault();
        console.log(title.current.value);
        console.log(dec.current.value);
        // console.log(auth.currentUser.uid);
        try {
            const docRef = await addDoc(collection(db, "store"), {
              title: title.current.value,
              dec: dec.current.value,
              uid: auth.currentUser.uid
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        
    }



     
      

  return (
        <>



        <form onSubmit={todoTitle}>
            <input type="text" placeholder='Enter your Text' ref={title}/>
            <input type="text" placeholder='Enter your Text' ref={dec}/>
            <button type='sumbit'>Click</button>
        </form>
        {/* <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> */}
        </>
  )
}

export default Home