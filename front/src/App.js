import Login from "./Login";
import Register from "./Register";
import UploadPhoto from "./UploadPhoto";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './app.css';
import Navbar1 from "./Navbar1";
import ListUsers from "./ListUsers";
import { useEffect, useState } from "react";
import ListFriends from "./ListFriends";
import UserNotifications from "./UserNotifications";
import UserProfile from "./UserProfile";
import Album from "./Album";
import MyUserProfile from "./MyUserProfile";
import Home from "./Home";
 

function App() {
  console.log('local storage', localStorage)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const[user, setUser] = useState('');
  const [usuariosEncontrados, setUsuariosEncontrados] = useState(null);
  //console.log(localStorage['access token'])

  return (
    <div>
      <Router>
        {localStorage['access token'] && 
        <>
        <MyUserProfile/>
        <Navbar1 setIsSubmitted={setIsSubmitted} setUsuariosEncontrados={setUsuariosEncontrados}/>
        <Routes>     
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/register/" element={<Register/>}/>   
          <Route exact path="/upload-photo" element={<UploadPhoto/>}/>   
          <Route exact path="/list-users/" element={<ListUsers usuariosEncontrados={usuariosEncontrados}/>}/>
          <Route exact path="/friends/" element={<ListFriends/>} />
          <Route exact path="/notifications" element={<UserNotifications/>}/>
          <Route exact path="/user/:userID" element={<UserProfile/>}/>
          <Route exact path="/album/:albumID" element={<Album/>}/>
        </Routes>            
        </>
        }

        {!localStorage['access token'] &&
        <>
        <Routes>    
            <Route exact path='/' element={<Login setIsSubmitted={setIsSubmitted} setUser={setUser}/>} />
            <Route exact path="/register/" element={<Register/>}/>   
        </Routes>            
        </>
  
        }
      </Router>
    </div>
  );

}

export default App;
