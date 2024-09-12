import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState(null)



  useEffect(() => {
   fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then((res)=>{
              console.log(res);
              setData(res)
            })
            .catch((err)=>{
              console.log(err);
            })
  }, [])

  const navigate = useNavigate()

  const singleUser = (item) => {
    // console.log(item)
    navigate(`/singlePage/${item.id}`)
  }

  return (
   <>
    <div>home</div>
    {
      data ? data.map((item)=>{
        return <div key={item.id}>
          <h1>{item.username}</h1>
          <button onClick={() => singleUser(item)}>Show More</button>
        </div>
      }): <h1>loading..</h1>
    }
   </>
  )
}

export default Home