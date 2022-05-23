import Login from "./Login";
import Register from "./Register";
import UploadPhoto from "./UploadPhoto";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import './app.css';

function App() {
  console.log('local storage', localStorage)
  return (
    <div>
      <Router>
        <Routes>     
          <Route exact path="/" element={<Login/>}/>  
          <Route exact path="/register/" element={<Register/>}/>   
          <Route exact path="/upload-photo" element={<UploadPhoto/>}/>   
          <Route exact path="/home/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
