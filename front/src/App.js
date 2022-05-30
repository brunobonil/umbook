import Login from "./Login";
import Register from "./Register";
import UploadPhoto from "./UploadPhoto";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar1 from "./Navbar1";
import ListUsers from "./ListUsers";
import { useState } from "react";
import ListFriends from "./ListFriends";

const Home = () => {
  return ( <h1>Home</h1> );
}
 


function App() {
  console.log('local storage', localStorage)
  const [usuariosEncontrados, setUsuariosEncontrados] = useState(null);
  console.log(localStorage['access token'])
  return (
    <div>
      <Router>
        {localStorage['access token'] &&
        <>
        <Navbar1 setUsuariosEncontrados={setUsuariosEncontrados}/>
        <Routes>     
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/register/" element={<Register/>}/>   
          <Route exact path="/upload-photo" element={<UploadPhoto/>}/>   
          <Route exact path="/list-users/" element={<ListUsers usuariosEncontrados={usuariosEncontrados}/>}/>
          <Route exact path="/friends/" element={<ListFriends/>} />
        </Routes>            
        </>
        }

        {!localStorage['access token'] &&
        <Login />
        }
      </Router>
    </div>
  );

}

export default App;
