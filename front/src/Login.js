import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


import "./login.css";


const Login = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState(null);

    return (
    <div className='app'>
      <h1 className='title'>Log in</h1>
      <div className='login-form'>
        <Formik
          initialValues={{
            username: '',            
            password: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));

            axios.post('http://127.0.0.1:8000/api/token/', {

                username: values.username,
                password:values.password,
                

            })
            .then(function (response) {
                console.log('access token',response.data.access)
                console.log('refresh token', response.data.refresh)
                localStorage.setItem("access token", response.data.access);
                localStorage.setItem("refresh token", response.data.refresh);
                setMessage('estas registrado');
                navigate('/home/')

            })
            .catch(function (error) {
                console.log(error)
                setMessage('no estas registrado');
            });
            
          }}
        >
          <Form className='form'>
            <label htmlFor="username">Username</label>
            <Field 
              className="input-container"
              id="username" 
              name="username" 
              placeholder="username" />
            
            <label htmlFor="password">Password</label>
            <Field
              className="input-container"
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            <div className='input-container'> 
              <div className='error'> { message } </div>
            </div>
            <div className='button-container'>
                <Link to='/register/'>
                    No esta registrado?
                </Link>
            </div>
            <div className='button-container'>
                <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>      
      </div>
    </div>
    );
}
 
export default Login;