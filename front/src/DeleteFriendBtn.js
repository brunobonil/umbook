import React, { useState } from 'react';
import axios from 'axios';


let DeleteFriendBtn = ({userID, getFriends}) => {
    let [eliminado, setEliminado] = useState(false);

    function saludarDesdeBoton(){
        axios.delete(
            `http://localhost:8000/api/delete_friend/${userID}/`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access token')}`
                }
            }
        )
        .then((r) => {
            setEliminado(true);         
        })

        .catch(e => {
            console.log(e);
        })
        

    }

    return (
        <>
        {
            !eliminado ? 
            <button onClick={() => saludarDesdeBoton()}>
                Eliminar amigo
            </button> 
            :
            <button disabled >
                ELIMINANDO...
                {setTimeout(function(){
                    getFriends();
                }, 2000)}

            </button>
        }
        </>
    )

};


export default DeleteFriendBtn;