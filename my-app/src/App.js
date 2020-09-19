import React,{useState, useEffect} from 'react';
import {FetchApi}  from './utils/FetchApi'
import './App.css';
import ProjectsPage from './Components/ProjectsPage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './users/Login'
import PrivateRoute from './utils/PrivateRoute'
import ProjectsList from './Components/ProjectsList'
import { ProjectContext } from './contexts/ProjectContext'


function App() {
  const [projectList, setProjectList] = useState ([{
    id: "",
    goalFundingDate: "",
    dateCreated: "",
    dateUpdated: "",
    projectTitle: "",
    projectStory: "",
    goalFunding: "",
    userID: ""
    }])

    
    useEffect(() => {
      FetchApi()
      .then((res) => {
          setProjectList(res.data)
          console.log("Project Page API working", res)
      })
      .catch((err) => {
          console.log("Project Page not working", err)
      })
  }, [])


  return (
    <Router>
      <ProjectContext.Provider value={ {projectList }} >
        {console.log("project list", projectList)}
      <div>
        <div className="landing">
          <h1>Virtual Reality Funding</h1>
          <Route path ="/Login" component={Login} />
          <Link to ="/Login">Login</Link>
          <Route exact path ="/" ><ProjectsList projectList={projectList} /></Route>
        </div>
        <Switch>
          <PrivateRoute path ="/protected" component={ProjectsPage} />
        </Switch>
    </div>
    </ProjectContext.Provider>
    </Router>
  );
}

export default App;
