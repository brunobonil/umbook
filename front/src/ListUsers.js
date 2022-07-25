import { useEffect, useState } from "react";
import AddFriendBtn from "./AddFriendBtn";
import axios from "axios";


const ListUsers = ({usuariosEncontrados}) => {

    const [friendsPK, setFriendsPK] = useState([]);
 
    function getFriends(){

        axios.get('http://localhost:8000/api/friends/',
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access token')}`
            },
        }
            ).then(resp => {
                setFriendsPK(resp.data.map(friend => friend.pk))
                
            });        
    }


    useEffect(() => {

        getFriends();

    },[]);



    return (
        <div>            
            {usuariosEncontrados && friendsPK &&
                <div className='content'>
                    <h1>{usuariosEncontrados.results} usuarios encontrados</h1>
                    {
                        usuariosEncontrados.data.map((usuario) => 
                        <div key={usuario.pk}>                          
                            <li >
                                {usuario.username} 
                                {friendsPK.includes(usuario.pk)?<button>ya es amigo</button>:
                                <AddFriendBtn userID={usuario.pk}/> 
                                } 
                            </li>     
                            
                        </div>

                        )
                    }
                </div>
            }
        </div>

        
)}
export default ListUsers;