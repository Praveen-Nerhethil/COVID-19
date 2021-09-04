import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header' ;
import India from './components/India';
import StateData from './components/StateDatas';
import World from './components/World';


function App() {
  return (
    
    <div className='Container-fluid'>
      <Router>
      <Header/>
        
          <Switch>
            <Route path="/india">
              <India/>
            </Route>
            <Route path="/world">
              <World/>
            </Route>
            <Route path="/state">
              <StateData/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
