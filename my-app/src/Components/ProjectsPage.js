import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import { FetchApi } from '../utils/FetchApi'
import CreateProject from './CreateProject'
import ProjectsList from './ProjectsList'
import EditProject from './EditProject'
import { ProjectContext } from '../contexts/ProjectContext'


const ProjectsPage = () => {
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

    const newProject = data => {
        const userProject = {
            id: Date.now(),
            goalFundingDate: Date.now(),
            projectTitle: data.projectTitle,
            projectStory: data.projectStory,
            goalFunding: data.goalFunding,
            userID: ""
        }
        setProjectList([...projectList, userProject])
    }

    return (
        <div className="projectPage" className="App">
            <CreateProject newProject={newProject}  />
            {/* <ProjectsList projectList={projectList} /> */}
            <EditProject updateProject={setProjectList} here={projectList}/>
        </div>
    )
}

export default ProjectsPage