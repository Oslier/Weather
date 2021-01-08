import './App.css';
import {useState} from 'react'
import sun from './sun.png';
import sky from './sky.jpg';

function App() {

  const [temp, setTemp] = useState(0);
  const [input, setInput] = useState('');

  let cityName = "Miami";


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

          <span className="temp">{ (temp - 273.15).toFixed(2) } <span className="degrees">°C</span> </span>
          
        </div>
      </div>

    </div>
  );
}

export default App;
