import AddFriendBtn from "./AddFriendBtn";

const ListUsers = ({usuariosEncontrados}) => {
    return (
        <div>            
            {usuariosEncontrados && 
                <div className='content'>
                    <h1>{usuariosEncontrados.results} usuarios encontrados</h1>
                    {
                        usuariosEncontrados.data.map((usuario) => 
                            <li key={usuario.pk}>{usuario.username} {<AddFriendBtn userID={usuario.pk}/>}</li>
                        )
                    }
                </div>
            }
        </div>

        
)}
export default ListUsers;