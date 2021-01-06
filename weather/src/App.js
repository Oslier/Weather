import './App.css';
import {useState} from 'react'
import sun from './sun.png';
import sky from './sky.jpg';

function App() {

  const [temp, setTemp] = useState(0);

  let myInput;

  let cityName = "London";


  const key = "509e28c5ef0b935055aa3d7630ccec35";
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.main.temp);
      setTemp(data.main.temp);
      console.log(data);
    })


  return (
    <div className="App">

      <div className="container">

        <input type="text" className="searchBar"/>

        <img src={sky} alt="" className="sky"/>

        <div className="mainFrame">

          <img src={sun} alt="" className="sun"/>

          <span className="temp">{ (temp - 273.15).toFixed(2) } <span className="degrees">°C</span> </span>
          
        </div>
      </div>

    </div>
  );
}

export default App;
