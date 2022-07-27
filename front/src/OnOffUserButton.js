import React, { useState } from 'react';
import axios from 'axios';


let OnOffUserButton = ({usuario}) => {
    const [toggle, setToggle] = useState(true)
    
    function toggleFunction(){
        setToggle(!toggle)
        console.log(!toggle)
        axios.patch(
            `http://127.0.0.1:8000/api/staff/user/${usuario.pk}/`,

            {
                is_active:!toggle
            }
            ,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access token')}`
                }
            }
        )
        .then((r) => {
            console.log(r)
        })

        .catch(e => {
            console.log(e);
        })
    }

    return(
        <>
        <button  onClick={() => toggleFunction()}>{toggle?'on':'off'}</button>
        </>
    )

};


export default OnOffUserButton;