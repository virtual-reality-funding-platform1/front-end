import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
    <div>
        <h1>Log in to your account!</h1>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={async values => {
                await new Promise(r => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <label htmlFor='email'>Email:</label>
                <Field id='email' name='email' placeholder='Enter your email!' type='email'/>

                <label htmlFor='password'>Password</label>
                <Field id='password' name='password' placeholder='Enter your password!'/>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    </div>
};

export default Login;