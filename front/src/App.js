import Login from "./Login";
import Register from "./Register";
import UploadPhoto from "./UploadPhoto";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar1 from "./Navbar1";
import ListUsers from "./ListUsers";
import { useState } from "react";

function App() {
  console.log('local storage', localStorage)
  const [usuariosEncontrados, setUsuariosEncontrados] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      <Router>
        {isSubmitted === true && 
        <>
        <Navbar1 setUsuariosEncontrados={setUsuariosEncontrados}/>
        <Routes>     
          <Route exact path="/register/" element={<Register/>}/>   
          <Route exact path="/upload-photo" element={<UploadPhoto/>}/>   
          <Route exact path="/list-users/" element={<ListUsers usuariosEncontrados={usuariosEncontrados}/>}/>
        </Routes>            
        </>
        }

        {isSubmitted === false &&
        <Login setIsSubmitted={setIsSubmitted}/>
        }
      </Router>
    </div>
  );

}

export default App;
