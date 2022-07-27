import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import {Navbar, Container, Dropdown} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';

const NavbarAdmin = ({ setIsSubmitted, setUsuariosEncontrados}) => {
    let navigate = useNavigate();

    function listarUsuariosDesdeAdmin(){
        axios.get('http://127.0.0.1:8000/api/staff/user/',
        {
            headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('access token')}`,
            'accept': 'application/json'
            }    
        }
        ).then(resp => {
            setUsuariosEncontrados(resp.data);
            navigate('/list-users-admin/')
        });        
    }


    function logOut(){
        localStorage.clear()
        setIsSubmitted(false)
        navigate('/')
    }

    return ( 
        <Navbar expand="lg" bg="dark" variant="dark">    
            <Container>
                <Link to='/'>
                    <Navbar.Brand >Umbook</Navbar.Brand>
                </Link>
                
                <Navbar.Brand className='admin-panel-letter'>PANEL ADMIN</Navbar.Brand>
                
                <button className='album-button' onClick={() => listarUsuariosDesdeAdmin()}>Usuarios</button>                   
            
                <button className='album-button' onClick={() => logOut()} >Log out</button>                   
            </Container>
        </Navbar>  
     );
}
 
export default NavbarAdmin;