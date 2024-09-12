import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePage = () => {
  const [data, setData] = useState(null);

const {id} = useParams();

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

  return (

<>
<div>SingleStudent {id}</div>
<h1>{data ? data.name : "loading..."}</h1>
</>
)
}

export default SinglePage