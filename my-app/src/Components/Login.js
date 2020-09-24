import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Formik, Field, Form} from 'formik';
import axios from 'axios';

const Login = (props) => {
    const submit = submission => {
        submission.preventDefault();
        const newTeamMember = {
            email: submission.target.email.value,
            password: submission.target.password.value
        }
        axios.post('https://lambdabw-virtual-backend.herokuapp.com/users/auth/login', newTeamMember)
        .then(res => {
            console.log(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    }
    return (
    <div>
        <h1>Log in to your account!</h1>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
        >
            <Form onSubmit={submit}>
                <label htmlFor='email'>Email:</label>
                <Field id='email' name='email' placeholder='Enter your email!' type='email'/>

                <label htmlFor='password'>Password</label>
                <Field id='password' name='password' placeholder='Enter your password!'/>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    </div>
)};

export default Login;