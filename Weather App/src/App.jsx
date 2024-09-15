
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'


function App() {
  const [status , setStatus] = useState([]);
  let inputRef = useRef()


  useEffect(() => {
  }, [checkStatus])

  function checkStatus(event) {
    event.preventDefault()
    if (inputRef.current.value === ``) {
        // alert(`please enter city name`)
    }

    async function getData() {
      const res = await axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${inputRef.current.value}&aqi=no`)
      .then(res => {
        console.log(res.data);
        status.push(res.data)
        setStatus([...status])
        console.log(status);

      }).catch(error => {
        console.log(error);
    })
    }
    getData()
    inputRef.current.value = ``

  }
  return (
    <>
    <div className='text-center font-semibold text-[1.8rem] bg-light'>
    <h1 className='p-4'>Weather-App</h1>
      <form className='' onSubmit={checkStatus}>
      <input className="form-control me-2" type="text" placeholder="Enter City Name!" ref={inputRef} />
      <br />
      <button className="btn btn-outline-primary" type="submit">Get Weather</button>
    </form>
    

    <div className=" d-flex justify-content-center gap-3 mt-3 pb-3 ">
                {(
                    status.map((item, index) => (
                        <div key={index} className=" text-center mt-2 p-3 bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-cyan-500/50 rounded">
                            <h2>{item.location.name}, {item.location.country}</h2>
                            <p>{item.location.localtime}</p>
                            <h1> {item.current.temp_c}°C</h1>
                            <img src={item.current.condition.icon} alt="Weather condition" />
                            <p><b>Wind Speed:</b> {item.current.wind_kph} kph</p>
                            <p><b>Condition:</b> {item.current.condition.text}</p>

                        </div>
                    ))
                )}
                
            </div>
            </div>

    
    
    </>
  )
}

export default App