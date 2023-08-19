import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const api = {
  key: 'c212747de83cb824569e282d4d104689',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {

  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState({})

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=imperial`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        {/*HEADER*/}
        <h1>Weather App</h1>

        {/*SEARCH*/}
        <div>
          <input 
            type='text'
            placeholder='Enter location...'

            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchPressed}>Search</button>
        </div>

        {typeof weather.main != "undefined"  ? (
          <div>
          {/*LOCATION*/}
          <p>{weather.name}</p>
  
          {/*TEMPERATURE F/C*/}
          <p>{weather.main.temp} F</p>
  
          {/*CONDITION*/}
          <p>{weather.weather[0].main}</p>
          </div>
        ) : ( 
        ""
        )}
      </header>
    </div>
  );
}

export default App;
