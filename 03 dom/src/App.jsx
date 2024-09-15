import React, { useEffect, useState } from 'react'

Cost (add , setAdd) = useState(null)

const App = () => {

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      setAdd(json)
    console.log(json)
    })
     .catch(err => console.log(err))  
    
  }),[]
  
  return (
<>
<h1>Hello World</h1>

<h1></h1>
</>
  )
}

export default App