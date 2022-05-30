import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import "./login.css";

const Register = () => {
  
  const [message, setMessage] = useState(null);


  function logearUsuario(values){
    alert(JSON.stringify(values, null, 2));
    axios.post('http://127.0.0.1:8000/api/register/', {
      email: values.email,
      password:values.password,
      password2:values.password2,
      username: values.username,
      first_name: values.first_name,
      last_name: values.last_name
      })
    .then(function (response) {
      setMessage(response.data.msg);
      })
    .catch(function (error) {
      setMessage(error.response.data.msg);
      });  
  }

  return( 
    <div className='app'>
      <h1 className='title'>Sign Up</h1>
      <div className='login-form'>
        <Formik
          initialValues={{
            email: '',
            password: '',
            password2: '',        
            username: '',
            first_name: '',
            last_name: '',
          }}
          onSubmit={async (values) => {
            logearUsuario(values);
          }}
        >
          <Form className='form'>
            <label htmlFor="email">Email</label>
            <Field 
              className="input-container"
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />

            <label htmlFor="password">Password</label>
            <Field
              className="input-container"
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            <label htmlFor="confirm password">confirm password</label>
            <Field
              className="input-container"
              id="password2"
              name="password2"
              placeholder="confirm password"
              type="password"
            />
            <label htmlFor="username">Username</label>
            <Field 
              className="input-container"
              id="username" 
              name="username" 
              placeholder="username" />
            <label htmlFor="first name">confirm password</label>
            <Field
              className="input-container"
              id="first_name"
              name="first_name"
              placeholder="first name"
              type="text"
            />

            <label htmlFor="last name">confirm password</label>
            <Field
              className="input-container"
              id="last_name"
              name="last_name"
              placeholder="last name"
              type="text"
            />
            <div className='input-container'> 
              <div className='error'> { message } </div>
            </div>
            <div className='button-container'>
              <button type="submit">Submit</button>
            </div>
            
          </Form>
        </Formik>      
      </div>
    </div>
  );

};

export default Register;