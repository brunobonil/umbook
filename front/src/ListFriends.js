import { useState ,useEffect } from "react";
import axios from "axios";

const ListFriends = () => {

    const [friends, setFriends] = useState(null);
    
    function getFriends(){
        axios.get('http://0.0.0.0:8000/friends/',     
        {
            params: {
                // usuario al que quiero buscar sus amigos que seria el q hizo login
                    }
        }
            ).then(resp => {
                console.log(resp)
                setFriends(resp.data);
                
            });        
    }

    useEffect(() => {

        getFriends();

    },[]);



    return (
    <div>
    {
        friends && 
        (
            friends.map(friend =>
                <div>
                    <h1>{friend.username}</h1>
                    <h2>{friend.first_name}</h2>
                    <h2>{friend.last_name}</h2>
                </div>
            
            )
        )
    }   
    </div>
    );
}
 
export default ListFriends;