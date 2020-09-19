import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/AxiosWithAuth'

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

function ProjectsList (props) {

    return (
        <div>
            <h2>Start fundraising today</h2>
            <div className="list">
            {props.projectList.map((project) => (
                <div className="projectList" key={project.id}>
                    <h3> {project.projectTitle}</h3>
                    <p>{project.projectStory}</p>
                    <p>Goal of {project.goalFunding}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ProjectsList

// projectTitle: data.projectTitle,
// projectStory: data.projectStory,
// goalFunding: data.goalFunding,
// userID: ""