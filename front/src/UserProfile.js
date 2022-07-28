import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const UserProfile = () => {
    const { userID } = useParams();
    const [userProfile, setUserProfile] = useState(null);
    function getUserProfile(){
        axios.get(`http://localhost:8000/api/user/${userID}/`,
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access token')}`
            }
        }
            ).then(resp => {
                setUserProfile(resp.data.result)
            });        
    }

    useEffect(() => {
        getUserProfile();

    },[]);

    return ( 
         <div className="content">
        {   userProfile &&
            <div>
                <h1>username {userProfile.user.username}</h1>
                <li>first name: {userProfile.user.first_name}</li>
                <li>last name: {userProfile.user.last_name}</li>
                <li>email: {userProfile.user.email}</li>        
                <div className="album-content">
                    <h2>Albums del perfil</h2>
                    {userProfile.albums[0]?.map(album => 
                        <div key={album.id}>
                            {console.log(album)}
                            <Link to={`/album/${album.id}`}>
                                <button className="album-button">{album.nombre}</button>  
                            </Link>

                        </div>
                        
                        
                    )}
                </div>        
            </div>


        
        }
        </div>  
     );
}
 
export default UserProfile;