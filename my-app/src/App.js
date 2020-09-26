import React from 'react';
import './App.css';
import ProjectsPage from './Components/ProjectsPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './users/Login'
import PrivateRoute from './utils/PrivateRoute'
import userRegister from './users/userRegister'
import NavBar from './Components/NavBar'


function App() {

  const virtualImage = require('./augmented-reality.jpg')


  return (
    <Router>
      <div>

        <div className="landing">
          <h1>Virtual Reality Funding</h1>
          <Route path ="/Login" component={Login} />
          <Route path ="/Register" component={userRegister} />
          <NavBar />
        </div>

        <Route exact path="/">
          <img src={virtualImage} alt="home page  girl riding bike" />
        </Route>

        <Switch>
          <PrivateRoute path ="/protected" component={ProjectsPage} />
        </Switch>

    </div>
    </Router>
  );
}

export default App;
