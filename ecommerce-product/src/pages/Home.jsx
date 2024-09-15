import { Box, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaCard from '../commponents/Card';

const Home = () => {
  const [product , setProduct] = useState(null)

  useEffect(()=>{
            async function getData() {
              const res = await axios('https://fakestoreapi.com/products')
              .then((res)=>{
              console.log(res.data);
              setProduct(res.data)
            })
            .catch((err)=>{
              console.log(err);
            })
            }
            getData()
            
  },[]);

  return (
<Box className="d-flex justify-content-evenly mt-5 flex-wrap gap-5" >
  { 
    product ? product.map((item)=>{
      return<MediaCard key={item.id} title = {item.title} src = {item.image} description = {item.description} id = {item.id}/>
    }):<CircularProgress/>
  }
 
</Box>  
)
}

export default Home