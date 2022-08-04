import { useState ,useEffect } from "react";
import {Dropdown, DropdownButton} from 'react-bootstrap'
import axios from "axios";


const CreateAlbum = () => {

    let [nombre, setNombre] = useState("");

    let [grupos, setGrupos] = useState([]);
    
    let [grupoElegido, setGrupoElegido] = useState("");


    let token = localStorage['access token'];

    function getNombre(n){
        setNombre(n)
    }
 
    function getGrupos(){

        axios.get('http://localhost:8000/api/list_groups/',
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access token')}`
            },
        }
            ).then(resp => {
                setGrupos(resp.data.result.groups)
                console.log(grupos)    
            });        
    }
    
    useEffect(() => {

        getGrupos();

    },[]);
    
    function createAlbum(){
        axios.post('http://localhost:8000/api/create_album/', 
        {
        nombre: nombre,
        grupo: grupoElegido,
        }, 
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access token')}`
            },
        })
    }


    return (

        <div style={{textAlign:"center"}}>
            <input placeholder="Name" />
            <DropdownButton title="Grupo" onClick={() => getGrupos()}>
                {grupos.map(g => (
                    <Dropdown.Item>{g.nombre}</Dropdown.Item>
                ))}
            </DropdownButton>
            <button onClick={(n) => {getNombre(n)
                createAlbum()}}>Create</button>
        </div>
        
    )}

export default CreateAlbum;

