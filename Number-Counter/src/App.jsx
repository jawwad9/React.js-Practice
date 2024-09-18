import { useState } from 'react'
import './App.css'

function App() {
  let [num, setNum] = useState(0)
  function addNum() {


    setNum(num + 1)
  }

  
  function lessNum() {
    if (num === 0) {
      alert(`The value does not go below zero`)
    } else {
      setNum(num - 1)
    }
  }
  function resetNum() {
    if (num === 0) {
      alert(`number is already reset`)
    } else {
      setNum(num = 0)
    }
  }
  console.log(num);

  return (
    <>
      <div className="container mt-5 p-5 " >
        <div>
        <h1 className="text-center m-5">{num}</h1>
        </div>
        <div className="button-group gap-3 d-flex justify-content-center align-self-center flex-wrap">
          <div>
          <button className="btn btn-outline-primary" onClick={addNum}>Add</button>
          </div>
          <div>
          <button className="btn btn-outline-primary" onClick={lessNum}>Less</button>
          </div>
          <div>
          <button className="btn btn-outline-danger" onClick={resetNum}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App