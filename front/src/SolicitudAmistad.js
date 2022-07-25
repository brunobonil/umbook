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
        })
        .catch(e => {
            console.log(e);
        })
    }

    function rechazarSolicitud(requestID){
        axios.get('http://127.0.0.1:8000/api/deny_friend/'+requestID+'/',
            {
                headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem('access token')}`,
                'accept': 'application/json'
            }    
            })
        .then(function (response) {
            setMsg(response.data.msg)
        })
        .catch(e => {
            console.log(e);
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
                <button onClick={() => rechazarSolicitud(notification.id)}> rechazar </button>    
            </div>
            }

        </div>
     );
}
 
export default SolicitudAmistad;