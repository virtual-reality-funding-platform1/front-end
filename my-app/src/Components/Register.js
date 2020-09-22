import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Formik, Field, Form} from Formik;


const Register = () => {
    <div>
        <h1>Register!</h1>
        <Formik
            initialValues={{
                name: '',
                email: '',
                username: '',
                password: '',
            }}
            onSubmit={async values => {
                await new Promise(r => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <label htmlFor='name'>Name:</label>
                <Field id='name' name='name' placeholder='Enter your name!'/>
                
                <label htmlFor='username'>Username:</label>
                <Field id='username' name='username' placeholder='Pick a username!'/>

                <label htmlFor='email'>Email:</label>
                <Field id='email' name='email' placeholder='Enter your email!' type='email'/>

                <label htmlFor='password'>Password</label>
                <Field id='password' name='password' placeholder='Choose a password!'/>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    </div>
};

export default Register;