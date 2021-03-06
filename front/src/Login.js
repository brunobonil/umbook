import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';


import "./login.css";


const Login = ({setIsSubmitted, setUser}) => {

    const [message, setMessage] = useState(null);
    function getMyUserProfile(){
        console.log(`http://localhost:8000/api/my_user/${localStorage['username']}/`);
        axios.get(`http://localhost:8000/api/my_user/${localStorage['username']}/`,
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access token')}`
            }
        }
            ).then(resp => {
                localStorage.setItem("user" , JSON.stringify(resp.data.result.user))
                setUser(resp.data.result.user)
            });        
    }
    function logearUsuario(values){
      alert(JSON.stringify(values, null, 2));
      localStorage.setItem("username" , values.username);
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
        //setUser(values.username)
        getMyUserProfile()
        setIsSubmitted(true)
        


        })
      .catch(function (error) {
        console.log(error)
        setMessage('no estas registrado');
        });
                 
    }


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

            logearUsuario(values);

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