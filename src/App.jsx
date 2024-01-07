import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./App.css"
import AirIcon from '@mui/icons-material/Air';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const App = () => {
  const [input, setInput] = useState("")
  const [temp, setTemp] = useState({})

  async function getWeather(cityName) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=ec40982f03c15b6f3599416615e8d908"
    const res = await axios.get(url)
    console.log(res.data);
    setTemp(res.data)
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  async function handleClick(e) {
    e.preventDefault()
    getWeather(input)
  }

  useEffect(() => {
    getWeather("nepal")
  }, [])

  return (
    <div className='container'>
      <div className="weather-app">
        <section className='header'>
          <img className="weather-img" src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png" alt="weather img" />
          <h1 className='heading'>WEATHER APP</h1>
        </section> <hr />
        <input type="text" onChange={handleChange} placeholder='Enter your city' />
        <button onClick={handleClick}>submit</button>
        <div className='circle'>
          <h1 className='temp'> {(temp?.main?.temp - 273.15).toFixed(2)}°C </h1>
          <h2 className='city'> {temp.name} </h2>
        </div>
        <section className='wind'>
          <h2> < AirIcon /> {temp?.wind?.speed}m/s</h2>
          <h3>  Wind</h3>
        </section>
        <section className='cloud'>
          <h2><CloudQueueIcon />  {temp?.clouds?.all}%</h2>
          <h3> Clouds</h3>

        </section>
      </div >
    </div>
  )
}
export default App