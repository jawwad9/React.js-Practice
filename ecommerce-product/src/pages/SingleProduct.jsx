import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MediaCard from '../commponents/Card';
import { Box, Typography } from '@mui/material';

const SingleProduct = () => {

    const [data , setData] = useState()
    const { id } = useParams();

    useEffect(()=>{
    axios(`https://fakestoreapi.com/products/${id}`)
          .then((res)=>{
          console.log(res);
          setData(res)
        })
        .catch((err)=>{
          console.log(err);
        })      
},[]);
    
  return (
    <>
        <div>SingleProduct {id}</div>

        {/* <MediaCard title = {data.title} src = {data.image} description = {data.description} /> */}
    </>
  )
}

export default SingleProduct