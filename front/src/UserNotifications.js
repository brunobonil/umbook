import { useEffect, useState } from "react";
import axios from "axios";
import UserData from "./UserData";


const UserNotifications = () => {

  const [notifications, setNotifications] = useState('');


  function getNotifications(){
    axios.get('http://127.0.0.1:8000/api/notifications/',
      {
         headers : {
         'Content-Type' : 'application/json',
         'Authorization' : `Bearer ${localStorage.getItem('access token')}`,
         'accept': 'application/json'
         }    
      }
      ).then(resp => {
            setNotifications(resp.data)
      }).catch(e => {
      // if (e.response.status === 401){
      //   console.log('no autorizado')
      //   axios.post('http://127.0.0.1:8000/api/token/refresh/', {
      //     refresh: refreshToken
      //   })  
      //   .then(function (response) {
      //     console.log('refreshing')
       //     console.log(response);
       //     setAccessToken(response.data.access)
                    //   })
                    // }
        })

  }

  useEffect(() => {
    getNotifications();
    }, [])


    return ( 
        <div >
        { notifications && 

            <div className='content'>
                <h1>Mis notificaciones</h1>
                {
                notifications.data.map(notification =>
                    <div key={notification.id}>
                      <h2>({notification.id}) {notification.contenido}</h2>
                      <UserData notificationId={notification.id}/>

                    </div>
                )
                }
            </div>
        }   
        </div>
     );
}
 
export default UserNotifications;