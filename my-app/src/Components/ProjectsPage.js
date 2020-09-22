import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import { FetchApi } from '../utils/FetchApi'
import CreateProject from './CreateProject'
import ProjectsList from './ProjectsList'
import EditProject from './EditProject'
import { ProjectContext } from '../contexts/ProjectContext'


const ProjectsPage = () => {
    const [projectList, setProjectList] = useState ([{
        projectTitle: "",
        projectStory: "",
        goalFunding: "",
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
            projectTitle: data.projectTitle,
            projectStory: data.projectStory,
            goalFunding: data.goalFunding,
        }
        setProjectList([...projectList, userProject])
    }

    return (
        <div className="projectPage" className="App">
            <CreateProject newProject={newProject}  here={projectList}/>
            <EditProject updateProject={setProjectList} here={projectList}/>
            <ProjectsList projectList={projectList} />
        </div>
    )
}

export default ProjectsPage