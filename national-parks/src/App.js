import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home'
import ParkInfo from './Components/ParkInfo/ParkInfo';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/parkinfo/:id" component={ParkInfo} />
      
    </div>
  );
}

export default App;
