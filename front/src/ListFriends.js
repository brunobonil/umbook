import { useState ,useEffect } from "react";
import axios from "axios";

const ListFriends = () => {

    const [friends, setFriends] = useState(null);
    
    let token = localStorage['access token'];

    function getFriends(){
        axios.get('http://0.0.0.0:8000/friends/',     
        {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' :  `Bearer ${localStorage.getItem('access token')}`,
                'accept': 'application/json'
                }    
                  },
            ).then(resp => {
                console.log(resp)
                setFriends(resp.data);
                
            });        
    }

    useEffect(() => {

        getFriends();

    },[]);



    return (
        <div >
        {
            friends && 
            <div className='content'>
                <h1>Listando amigos</h1>
                {
                friends.map(friend =>
                    <div key={friend.pk}>
                        <h2>{friend.username}</h2>
                        <li>{friend.first_name}</li>
                        <li>{friend.last_name}</li>
                    </div>
                )
                }
            </div>
        }   
        </div>
    );
}
 
export default ListFriends;