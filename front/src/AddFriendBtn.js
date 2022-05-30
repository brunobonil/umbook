import React, { useState } from 'react';
import axios from 'axios';


let AddFriendBtn = ({userID}) => {

    let [sent, setSent] = useState(false);

    let addFriend = () => {
        axios.post(
            `http://localhost:8000/api/add_friend/${userID}/`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access token')}`
                }
            }
        )

        .then((r) => {
            setSent(true);
        })

        .catch(e => {
            console.log(e);
        })

    }


    return (
        <>
        {
            !sent ? 
            <button onClick={() => addFriend()}>
                Add Friend
            </button> 
            :
            <button disabled >
                Friend request sent!
            </button>
        }
        </>
    )

};


export default AddFriendBtn;