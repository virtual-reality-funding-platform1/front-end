import React, { useContext } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'
import {axiosWithAuth} from '../utils/AxiosWithAuth'

function ProjectsList (props) {
    const { projectList } = useContext( ProjectContext )

    return (
        <div className="listDiv">
            <h2>Start fundraising today</h2>
            <div className="list">
            {projectList.map((project) => (
                <div className="projectList" key={project.id}>
                    <h3> {project.projectTitle}</h3>
                    <p>{project.projectStory}</p>
                    <p>Goal of {project.goalFunding}</p>
                    
                    <span className="delete" 
                    onClick={project=> {
                        axiosWithAuth()
                        .get(`donations/projects/${project.id}`)
                        .then ( (res) => {
                            console.log("donation get working", res)
                            return res
                        })
                        .catch(err => console.log(err));
                  }
                }>
                  Donate!
              </span>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ProjectsList

