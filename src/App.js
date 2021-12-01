import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ParticlesBacground from './Pages/ParticlesBacground';

function App() {
  return (
    <>
    <Router>
      <ParticlesBacground/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
