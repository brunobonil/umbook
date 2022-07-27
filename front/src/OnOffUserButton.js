import React, { useState } from 'react';
import axios from 'axios';


let OnOffUserButton = ({usuario}) => {

    return (
        <button onClick={()=> {console.log('click de', usuario)}}>button</button>
    )

};


export default OnOffUserButton;