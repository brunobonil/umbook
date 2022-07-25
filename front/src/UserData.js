import axios from "axios";
import { useEffect, useState } from "react";

const UserData = ({notificationId}) => {
    const [userData, setUserData] = useState(null);
    function getDatosEmisor(notificationId){
        axios.get('http://127.0.0.1:8000/api/usern/'+notificationId+'/',
        {
             headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('access token')}`,
            'accept': 'application/json'
            }    
        }
        ).then(resp => {
            setUserData(resp.data.data)
        }) 
        .catch(e => {
            console.log(e);
        })
  }

    useEffect(()=>{
        getDatosEmisor(notificationId)
    }, [])

    

    return ( 
        <div>
            {userData && (
                <p>from {userData.username} </p>
            )  
            
            }
            
        </div>
     );
}
 
export default UserData;