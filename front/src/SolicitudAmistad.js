import { useState } from "react";
import UserData from "./UserData";
import axios from "axios";

const SolicitudAmistad = ({notification}) => {

    const [msg, setMsg] = useState(null);

    function aceptarSolicitud(notificationId){
        axios.post('http://127.0.0.1:8000/api/accept_friend/'+notificationId+'/', {
        },{
         headers : {
         'Content-Type' : 'application/json',
         'Authorization' : `Bearer ${localStorage.getItem('access token')}`,
         'accept': 'application/json'
         }    
        })
        .then(function (response) {
            setMsg(response.data.msg)
            ;
        })
    }



    return ( 
        <div>
            { msg && 
            
            <p> {msg} </p>
            
            }

            { !msg && 
            <div>
                <h2>Solicitud de amistad </h2>
                <UserData notificationId={notification.id}/>
                <button onClick={() => aceptarSolicitud(notification.id)}> aceptar </button>                
            </div>
            }

        </div>
     );
}
 
export default SolicitudAmistad;