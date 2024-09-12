// import React from 'react'

// const Card = () => {
//   return (
// <>
// <h1>Card Title</h1>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing
//      elit. Nesciunt, asperiores?</p>
// <p>Rs; 2000</p>

// </>  )
// }


// export default Card


import React, { useState } from 'react'

const Card = (props) => {
  return (
<>
<img src={props.src} alt="" />
<h1>PKR: {props.price}</h1>
<h2>{props.title}</h2>
</>  
)
}

export default Card