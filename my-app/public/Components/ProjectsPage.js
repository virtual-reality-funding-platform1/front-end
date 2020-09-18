import React, {useState, useEffect} from 'react'
import { FetchApi } from '../../public/utils/FetchApi'
import CreateProject from './CreateProject'

const ProjectsPage = () => {
    const [projectList, setProjectList] = useState ([{
    id: "",
    goalFundingDate: Date.now(),
    dateCreated: Date.now(),
    dateUpdated: Date.now(),
    projectTitle: "",
    projectStory: "",
    projectHeroImage: "",
    goalFunding: "",
    currentFunding: "",
    userID: ""
    }])

    useEffect(() => {
        FetchApi()
        .then((res) => {
            setProjectList(res.data)
            console.log("Project Page API working", res)
        })
        .catch((err) => {
            console.log("Project Page not working")
        })
    }, [])

    const newProject = data => {
        const userProject = {
            id: Date.now(),
            goalFundingDate: Date.now(),
            dateCreated: Date.now(),
            dateUpdated: Date.now(),
            projectTitle: data.projectTitle,
            projectStory: data.projectStory,
            projectHeroImage: data.projectHeroImage,
            goalFunding: data.goalFunding,
            currentFunding: data.currentFunding,
            userID: Date.now()
        }
        setProjectList([...projectList, userProject])
    }
    return (
        <div>
            <CreateProject newProject={newProject} />
        </div>
    )
}