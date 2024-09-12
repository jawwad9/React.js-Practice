
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
    <h1>Weather-App</h1>

      <form onSubmit={checkStatus}>
      <input type="text" placeholder="Enter Text" ref={inputRef} />
      <button type="submit">click</button>
    </form>

    <div>
                {(
                    status.map((item, index) => (
                        <div key={index}>
                            <h2>Country  {item.location.country}, City  {item.location.name}</h2>
                            <p>Temperature: {item.current.temp_c}°C</p>
                            <p>Condition: {item.current.condition.text}</p>
                            <img src={item.current.condition.icon} alt="Weather condition" />
                            <p>Humidity: {item.current.humidity}%</p>
                            <p>Wind Speed: {item.current.wind_kph} kph</p>
                        </div>
                    ))
                )}
            </div>

    
    </>
  )
}

export default App