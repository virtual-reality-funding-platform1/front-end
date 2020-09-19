import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/AxiosWithAuth'

const initialProject = {
    goalFundingDate: "",
    dateCreated: "",
    dateUpdated: "",
    projectTitle: "",
    projectStory: "",
    goalFunding: "",
    userID: ""
}

function EditProject({ here, updateProject }) {
      const [editing, setEditing] = useState(false);
      const [projectsEdit, setProjectsEdit] = useState(initialProject);

      const editProjects = pro => {
        setEditing(true);
        setProjectsEdit(pro)
    }

    const saveEdit = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(`/projects/${projectsEdit.id}`, projectsEdit)
        .then(res=> {
            updateProject([
                ...here.filter(item => item.id !== projectsEdit.id),
                res.data
            ])
        })
        .catch(err => console.log('saveEdit api not working', err))
    }

    return (
            <div >
            <h2>Edit Project</h2>
            {here.map((project) => (
                <div className="projectList" key={project.id} onClick={() => editProjects(project)}>
                    <p>Title: {project.projectTitle}</p>
                    <p>{project.projectStory}</p>
                    <p>Our Goal: {project.goalFunding}</p>
                </div>
            ))}

            {editing && (
                <form onSubmit={saveEdit}>
                    <input onChange={e => 
                    setProjectsEdit({...projectsEdit, projectTitle: e.target.value }) } 
                    value={projectsEdit.projectTitle} name='projectTitle'/>
                    <input onChange={e => 
                    setProjectsEdit({...projectsEdit, projectStory: e.target.value }) } 
                    value={projectsEdit.projectStory} name='projectStory'/>
                    <input onChange={e => 
                    setProjectsEdit({...projectsEdit, goalFunding: e.target.value }) } 
                    value={projectsEdit.goalFunding} name='goalFunding'/>
                     <input onChange={e => 
                    setProjectsEdit({...projectsEdit, userID: e.target.value }) } 
                    value={projectsEdit.userID} name='userID'/>
                    <div>
                        <button type="submit">save</button>
                        <button onClick={() => setEditing(false)}>cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default EditProject
