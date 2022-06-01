import Login from "./Login";
import Register from "./Register";
import UploadPhoto from "./UploadPhoto";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar1 from "./Navbar1";
import ListUsers from "./ListUsers";
import { useState } from "react";
import ListFriends from "./ListFriends";
import UserNotifications from "./UserNotifications";


const Home = () => {
  return ( <h1>Home</h1> );
}
 


function App() {
  console.log('local storage', localStorage)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const[user, setUser] = useState('');
  const [usuariosEncontrados, setUsuariosEncontrados] = useState(null);
  //console.log(localStorage['access token'])

  console.log(user)
  return (
    <div>
      <Router>
        {localStorage['access token'] &&
        <>
        <Navbar1 setIsSubmitted={setIsSubmitted} setUsuariosEncontrados={setUsuariosEncontrados}/>
        <Routes>     
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/register/" element={<Register/>}/>   
          <Route exact path="/upload-photo" element={<UploadPhoto/>}/>   
          <Route exact path="/list-users/" element={<ListUsers usuariosEncontrados={usuariosEncontrados}/>}/>
          <Route exact path="/friends/" element={<ListFriends/>} />
          <Route exact path="/notifications" element={<UserNotifications/>}/>
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
