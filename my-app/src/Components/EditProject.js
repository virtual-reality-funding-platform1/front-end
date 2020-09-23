import React, { useState, useContext } from 'react'
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import { ProjectContext } from '../contexts/ProjectContext'


const initialProject = {
    projectTitle: "",
    projectStory: "",
    goalFunding: "",
}

function EditProject({  updateProject }) {
      const { projectList } = useContext( ProjectContext )
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
                ...projectList.filter(item => item.id !== projectsEdit.id),
                res.data
            ])
        })
        .catch(err => console.log('saveEdit api not working', err))
    }

    const deleteProject = pro => {
        axiosWithAuth()
        .delete(`projects/${pro.id}`)
        .then ( () => {
            updateProject(projectList.filter(item => item.id !== pro.id))
        })
        .catch(err => console.log(err));
    }

    return (
            <div>
            <h2>Edit Project</h2>
            {projectList.map((project) => (
                <div className="projectList" key={project.project} onClick={() => editProjects(project)}>
                    <div className="editProject">
              <span  className="delete" onClick={e => {
                    e.preventDefault();
                    deleteProject(project)
                  }
                }>
                  Delete
              </span>
              <h3>{project.projectTitle}</h3>
              <p>{project.projectStory}</p>
              <p>{project.goalFunding}</p>
            </div>
                </div>
            ))}

            {editing && (
                <form onSubmit={saveEdit}>
                    <input onChange={e => 
                    setProjectsEdit({...projectsEdit, projectTitle: e.target.value }) } 
                    value={projectsEdit.projectTitle} name='projectTitle' />
                    
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
