import './App.css';
import {useState} from 'react'
import sun from './sun.png';
import sky from './sky.jpg';

function App() {

  const [temp, setTemp] = useState(0);
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState('');
  const [imgage, setImage] = useState('');


  let cityName = input;


  const key = "509e28c5ef0b935055aa3d7630ccec35";
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`

  


    function myEvent(event){
      if(event.key === 'Enter'){
        console.log('enter press here! ');
        var input = document.getElementsByClassName("searchBar");
        

        fetch(api)
        .then(response => {
          console.log("api call")
          return response.json();
        })
        .then(data => {
          setTemp(data.main.temp);
          setWeather(data.weather[0].description)
          console.log(data);
        })
      }
    }

  return (
    <div className="App">

      <div className="container">

        <input type="text" className="searchBar" value={input} onInput={e => setInput(e.target.value)} onKeyPress={myEvent}/>

        <img src={sky} alt="" className="sky"/>

        <div className="mainFrame">

          <img src={sun} alt="" className="sun"/>

          <div className="info">
            <h1>
              {cityName}
            </h1>
            <div className="temp">{ (temp - 273.15).toFixed(2) }
              <span className="degrees">°C</span>
              
            </div>
            <div className="weather">{weather}</div>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default App;
