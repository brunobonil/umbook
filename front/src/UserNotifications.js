import { useEffect } from "react";
import axios from "axios";

const UserNotifications = () => {

    let token = localStorage['access token'];
    console.log('access token '+token)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/notifications/', 
                  {},
                  {
                    headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`,
                    'accept': 'application/json'
                    }    
                  },
                  ).then(resp => {
        // resp.data = [lista de notificaciones de mi usuario (objetos notificacion serializados) ]
        // resp.len = cantidad de notificaciones que tiene mi usuario
        console.log(resp);
});

    })

    return ( 
        <h1>NOTIFICATIONS</h1>
     );
}
 
export default UserNotifications;