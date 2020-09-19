import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/AxiosWithAuth'

const initialProject = {
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

    const deleteProject = pro => {
        axiosWithAuth()
        .delete(`/projects/${pro.id}`)
        .then ( () => {
            updateProject(pro.filter(...here.filter(item => item.id !== pro.id)))
        })
        .catch(err => console.log(err));
    }

    return (
            <div >
            <h2>Edit Project</h2>
            {here.map((project) => (
                <div className="projectList" key={project.project} {...project} onClick={() => editProjects(project)}>
                    <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteProject(project)
                  }
                }>
                  Delete
              </span>{" "}
              {project.projectTitle}
            </span>
                </div>
            ))}

            {editing && (
                <form onSubmit={saveEdit}>
                    <input onChange={e => 
                    setProjectsEdit({...projectsEdit, projectTitle: e.target.value }) } 
                    value={projectsEdit.projectTitle} name='projectTitle' id='projectTitle'/>
                    
                    <input onChange={e => 
                    setProjectsEdit({...projectsEdit, projectStory: e.target.value }) } 
                    value={projectsEdit.projectStory} name='projectStory'/>
                    
                    <input onChange={e => 
                    setProjectsEdit({...projectsEdit, goalFunding: e.target.value }) } 
                    value={projectsEdit.goalFunding} name='goalFunding'/>
                    
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
