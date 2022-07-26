import { useEffect, useState } from "react";
import axios from "axios";

const MyUserProfile = () => {

    let userName = localStorage['username']

    function getMyUserProfile(){
        axios.get(`http://localhost:8000/api/my_user/${userName}/`,
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access token')}`
            }
        }
            ).then(resp => {
                localStorage.setItem("user" , JSON.stringify(resp.data.result.user))
            });        
    }

    useEffect(() => {
        getMyUserProfile()
    }, [])

}
 
export default MyUserProfile;