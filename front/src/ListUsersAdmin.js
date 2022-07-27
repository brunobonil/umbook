import axios from "axios";
import OnOffUserButton from "./OnOffUserButton";


const ListUsersAdmin = ({usuariosEncontrados}) => {

    return ( 
        <div>            
            {usuariosEncontrados && 
                <div className='content'>
                    <h1>usuarios</h1>
                    {
                        usuariosEncontrados.map((usuario) => 
                        <div key={usuario.pk}>                          
                            <li >
                                {usuario.username} 
                                <OnOffUserButton usuario={usuario} />
                            </li>     
                            
                        </div>

                        )
                    }
                </div>
            }
        </div>
     );
}
 
export default ListUsersAdmin;