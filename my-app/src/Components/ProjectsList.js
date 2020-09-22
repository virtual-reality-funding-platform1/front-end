import React, { useContext } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'


function ProjectsList (props) {
    const { projectList } = useContext( ProjectContext )
    return (
        <div>
            <h2>Start fundraising today</h2>
            <div className="list">
            {projectList.map((project) => (
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

