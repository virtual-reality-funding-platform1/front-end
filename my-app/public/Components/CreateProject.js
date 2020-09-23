import React, { useState } from "react"
import axios from "axios"
import { AxiosWithAuth } from '../../public/utils/axiosWithAuth'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const CreateProject = props => {
    const [project, setProject] = useState({
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
    })

    const [post, setPost] = useState([])

    const handleChanges = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        props.newProject(project);
        AxiosWithAuth()
            .post("api/projects",project)
            .then((res) => {
                setPost(res.data)
                console.log("Create Project Working", post)
                setProject({
                id: "",
                goalFundingDate: Date.now(),
                dateCreated: Date.now(),
                dateUpdated: Date.now(),
                projectTitle: "",
                projectStory: "",
                projectHeroImage: "",
                goalFunding: "",
                currentFunding: "",
                userID: ""})
            })
            .catch((err) => console.log("Creat Project NOT working", err))
    }

    return (
        <div>
            <FORM onSubmit={submitForm}>
                <Form.Field
                    id='projectTitle'
                    control={Input}
                    label='Project Title'
                    placeholder='Project Title'
                    onChange={handleChanges}
                    value={project.projectTitle}
                />
            </FORM>
        </div>
    )
}