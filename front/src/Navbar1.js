import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import {Navbar, Container, Dropdown} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";


const Navbar1 = ({ setUsuariosEncontrados}) => {
    let navigate = useNavigate();
    function buscarUsuario(values){
        alert(JSON.stringify(values, null, 2));
        axios.get('http://127.0.0.1:8000/api/users/'+values.search+'/').then(resp => {
            setUsuariosEncontrados(resp.data);
            navigate('/list-users/')
        });        
    }

    return ( 
        <Navbar expand="lg" bg="dark" variant="dark">    
            <Container>
                <Link to='/'>
                    <Navbar.Brand >Umbook</Navbar.Brand>
                </Link>
                
                <Formik
                    initialValues={{
                        search: '',
                    }}
                    onSubmit={async (values) => {
                        buscarUsuario(values);
                    }}
                >
                    <Form  className="d-flex">
                        <Field id="search" name="search" placeholder="search friend" />
                        <button type="submit">Search user</button>
                    </Form>
                </Formik>       

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        My Account
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/friends/">My friends</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>                     
            </Container>
        </Navbar>  
     );
}

export default Navbar1;