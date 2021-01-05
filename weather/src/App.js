import './App.css';
import sun from './sun.png';
import sky from './sky.jpg';

function App() {
  return (
    <div className="App">

      <div className="container">

        <input type="text" className="searchBar"/>

        <img src={sky} alt="" className="sky"/>

        <div className="mainFrame">

          <img src={sun} alt="" className="sun"/>

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, modi.

        </div>
      </div>

    </div>
  );
}

export default App;
