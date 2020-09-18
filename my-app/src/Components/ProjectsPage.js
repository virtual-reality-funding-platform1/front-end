import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import { FetchApi } from '../utils/FetchApi'
import CreateProject from './CreateProject'
import ProjectsList from './ProjectsList'

const initialProject = {
    id: "",
    goalFundingDate: "",
    dateCreated: "",
    dateUpdated: "",
    projectTitle: "",
    projectStory: "",
    goalFunding: "",
    userID: ""
}
const ProjectsPage = ({projects, updateProject}) => {
    console.log(projects)
    const [projectList, setProjectList] = useState ([initialProject])
    const [editing, setEditing] = useState(false);
    const [projectToEdit, setProjectToEdit] = useState([initialProject])
    
    const editProject = project => {
        setEditing(true)
        setProjectToEdit(project)
    }

    const saveEdit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .put(`/projects/${setProjectList.id}`, projectList)
            .then(res => {
                updateProject([
                    ...projects.filter(item => item.id !== projectToEdit.id),
                    res.data
                ])
            })
            .catch(err => console.log('edit api not working', err))
    }


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
        <div className="projectPage">
            <CreateProject newProject={newProject}  />
            <ProjectsList projectList={projectList} />
        </div>
    )
}

export default ProjectsPage