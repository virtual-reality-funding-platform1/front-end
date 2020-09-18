import React from 'react';
import './App.css';
import ProjectsPage from './Components/ProjectsPage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './users/Login'
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
      <p>Virtual Reality Funding</p>
      <Link to ="/Login">Login</Link>


      <Switch>
        <PrivateRoute path ="/protected" component={ProjectsPage} />
        <Route path="/Login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
