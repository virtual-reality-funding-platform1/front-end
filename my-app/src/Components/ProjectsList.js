import React from 'react'

function ProjectsList (props) {
    return (
        <div className="list">
            <h2>Start fundraising today</h2>
            {props.projectList.map((project) => (
                <div className="projectList" key={project.id}>
                    <p>Title: {project.projectTitle}</p>
                    <p>{project.projectStory}</p>
                    <p>Our Goal: {project.goalFunding}</p>
                </div>
            ))}
        </div>
    )
}

export default ProjectsList

// projectTitle: data.projectTitle,
// projectStory: data.projectStory,
// goalFunding: data.goalFunding,
// userID: ""