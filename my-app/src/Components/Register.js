import axios from 'axios';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Formik, Field, Form} from 'formik';


const Register = (props) => {
    const [user, setUser] = useState({
        userRole: 'user',
        username: '',
        email: '',
        password: ''
    });
    const submit = submission => {
        submission.preventDefault();
        const newTeamMember = {
            userRole: submission.target.userRole.value,
            username: submission.target.username.value,
            email: submission.target.email.value,
            password: submission.target.password.value
        }
        axios.post('https://lambdabw-virtual-backend.herokuapp.com/users', newTeamMember)
        .then(res => {
            console.log(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    };
    const change = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    return (
    <div>
        <h1>Register!</h1>
        <Formik
            initialValues={{
                firstName: '',
                email: '',
                username: '',
                password: '',
            }}
        >
            <Form onSubmit={submit}>
                <label htmlFor='userRole'>Role:</label>
                <Field as='select' name='userRole' onChange={change}>
                    <option value='user'>
                        User
                    </option>
                    <option value='investor'>
                        Investor
                    </option>
                </Field>                
                <label htmlFor='username'>Username:</label>
                <Field id='username' name='username' placeholder='Pick a username!' onChange={change} value={user.username}/>

                <label htmlFor='email'>Email:</label>
                <Field id='email' name='email' placeholder='Enter your email!' type='email' onChange={change} value={user.email}/>

                <label htmlFor='password'>Password</label>
                <Field id='password' name='password' placeholder='Choose a password!' onChange={change} value={user.password}/>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    </div>
    )};

export default Register;