import './App.css';
import sun from './sun.png';
import sky from './sky.jpg';

function App() {

  let cityName = "Miami";

  let temp;

  const key = "509e28c5ef0b935055aa3d7630ccec35";
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.main.temp);
      temp = data.main.temp;
    })

  return (
    <div className="App">

      <div className="container">

        <input type="text" className="searchBar"/>

        <img src={sky} alt="" className="sky"/>

        <div className="mainFrame">

          <img src={sun} alt="" className="sun"/>

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, modi. {temp}

        </div>
      </div>

    </div>
  );
}

export default App;
