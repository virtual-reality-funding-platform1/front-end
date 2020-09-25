import React from 'react';
import './App.css';
import ProjectsPage from './Components/ProjectsPage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './users/Login'
import PrivateRoute from './utils/PrivateRoute'
import userRegister from './users/userRegister'
import NavBar from './Components/NavBar'


function App() {



  return (
    <Router>
      {/* <ProjectContext.Provider value={ {projectList }} >
        {console.log("project list", projectList)} */}
      <div>
        <div className="landing">
          <h1>Virtual Reality Funding</h1>
          <Route path ="/Login" component={Login} />
          {/* <Link to ="/Login">Login</Link> */}
          <Route path ="/Register" component={userRegister} />
          {/* <Link to ="/Register">Register</Link> */}
          <NavBar />
        </div>
        <Switch>
          <PrivateRoute path ="/protected" component={ProjectsPage} />
        </Switch>

    </div>
    </Router>
  );
}

export default App;
