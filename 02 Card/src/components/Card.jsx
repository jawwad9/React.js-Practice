import React from 'react'

const Card = ({src, price, title}) => {
  return (
<>
<img src={src} alt="" />
<h1>PKR:{price}</h1>
<h2>{title}</h2>
</>  
)
}
export default Card


// import React, { useState } from 'react'

// const Card = (props) => {
//   return (
// <>
// <img src={props.src} alt="" />
// <h1>PKR: {props.price}</h1>
// <h2>{props.title}</h2>
// </>  
// )
// }

// export default Card