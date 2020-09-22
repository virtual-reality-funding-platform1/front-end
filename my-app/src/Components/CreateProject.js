import React, { useState } from "react"
import axios from "axios"
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import { Input, Form, Button } from 'semantic-ui-react'

const CreateProject = (props) => {
    const [project, setProject] = useState({
            projectTitle: "",
            projectStory: "",
            goalFunding: "",
    })

    // const [post, setPost] = useState([])
   

    const handleChanges = e => {
        setProject({ ...project,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        props.newProject(project);
        axiosWithAuth()
            .post("projects", project)
            .then((res) => {
                // setPost(res.data)
                console.log("Create Project Working", project)
                setProject({
                    projectTitle: "",
                    projectStory: "",
                    goalFunding: "",
                })
            })
            .catch((err) => console.log("Create Project NOT working", err))
    }

    return (
        <div className='projectForm'>
            <h2> Create Project</h2>
            <Form onSubmit={submitForm} >
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Project Title'
                        onChange={handleChanges}
                        value={project.projectTitle}
                        name='projectTitle'
                    />
                </Form.Field>
                <Form.Field>
                <input
                    name='projectStory'
                    type='text'
                    placeholder='Project Story'
                    onChange={handleChanges}
                    value={project.projectStory}
                />
                </Form.Field>
                <Form.Field>
                    <input
                        name='goalFunding'                    
                        type='text'
                        placeholder='Project Goal Funding'
                        onChange={handleChanges}
                        value={project.goalFunding}
                    />
                </Form.Field>

                <Button>Submit</Button>                  
            </Form>
        </div>
    )
}

export default CreateProject

