import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import { useState } from 'react';

const Navbar1 = ({setUsuariosEncontrados}) => {
    return ( 
           <Navbar expand="lg" bg="dark" variant="dark">    
                <Container fluid>
                        <Navbar.Brand >Umbook</Navbar.Brand>
                        <Formik
                            initialValues={{
                                search: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                                axios.get('http://127.0.0.1:8000/api/users/'+values.search+'/').then(resp => {
                                    setUsuariosEncontrados(resp.data);
                                });
                            }}
                            >
                            <Form  className="d-flex">
                                <Field id="search" name="search" placeholder="search friend" />
                                <button type="submit">Search friend</button>
                            </Form>
                        </Formik>                                                                 
                </Container>
            </Navbar>  
     );
}


const Home = () => {

    const [usuariosEncontrados, setUsuariosEncontrados] = useState(null);

    return (
        <div>
            <Container>
                <Navbar1 setUsuariosEncontrados={setUsuariosEncontrados} />
            </Container>
            
            {usuariosEncontrados && 
                <div className='content'>
                    <h1>{usuariosEncontrados.results} usuarios encontrados</h1>
                    {
                        usuariosEncontrados.data.map((usuario) => 
                            <li key={usuario.pk}>{usuario.username}</li>
                        )
                    }
                </div>
            }
        </div>

        
)}
export default Home;