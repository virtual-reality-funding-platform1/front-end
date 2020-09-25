import axios from 'axios';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
          .min(2, 'Too Short!')
          .max(15, 'Too Long!')
          .required('Username is required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
        .min(8, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Password is required'),
      });
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
                userRole: '',
                email: '',
                username: '',
                password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {({ err, touched }) => {
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
                {errors.username && touched.username ? <div>{errors.username}</div> : null}

                <label htmlFor='email'>Email:</label>
                <Field id='email' name='email' placeholder='Enter your email!' type='email' onChange={change} value={user.email}/>
                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                <label htmlFor='password'>Password</label>
                <Field id='password' name='password' placeholder='Choose a password!' onChange={change} value={user.password}/>
                {errors.password && touched.password ? <div>{errors.password}</div> : null}

                <button type='submit'>Submit</button>
            </Form>  
            }}
            
        </Formik>
    </div>
    )};

export default Register;