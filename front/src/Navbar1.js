import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import {Navbar, Container} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


const Navbar1 = ({setUsuariosEncontrados}) => {
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
            <Container fluid>
                <Navbar.Brand >Umbook</Navbar.Brand>
                
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
            </Container>
        </Navbar>  
     );
}

export default Navbar1;