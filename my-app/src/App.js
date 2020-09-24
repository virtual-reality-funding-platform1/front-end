import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Router>
    </div>
  );
}

export default App;
