import React from 'react'
import { useState } from 'react'

const App = () => {

  const [color, setColor] = useState("olive");
  
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'
    >
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      >
        <button className='outline-non px-4 rounded-full text-white shado-lg'
        style={{backgroundColor: "red"}}
        onClick={() => setColor("red")}
        >Red</button>
                <button className='outline-non px-4 rounded-full text-white shado-lg'
        style={{backgroundColor: "#facc15"}}
        onClick={() => setColor("#facc15")}
        >Yellow</button>
                <button className='outline-non px-4 rounded-full text-white shado-lg'
        style={{backgroundColor: "#0c0a09"}}
        onClick={() => setColor("#0c0a09")}
        >Black</button>
                <button className='outline-non px-4 rounded-full text-white shado-lg'
        style={{backgroundColor: "#4b5563"}}
        onClick={() => setColor("#4b5563")}
        >Gray</button>
                <button className='outline-non px-4 rounded-full text-white shado-lg'
        style={{backgroundColor: "#22c55e"}}
        onClick={() => setColor("#22c55e")}
        >Green</button>
                        <button className='outline-non px-4 rounded-full text-white shado-lg'
        style={{backgroundColor: "#f87171"}}
        onClick={() => setColor("#f87171")}
        >Pink</button>
                        <button className='outline-non px-4 rounded-full text-white shado-lg'
        style={{backgroundColor: "#0891b2"}}
        onClick={() => setColor("#0891b2")}
        >Blue</button>
      </div>
    </div>
    </div>
  )
}

export default App