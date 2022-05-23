import Login from "./Login";
import Register from "./Register";
import UploadPhoto from "./UploadPhoto";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Routes>     
          <Route exact path="/" element={<Login/>}/>  
          <Route exact path="/register/" element={<Register/>}/>   
          <Route exact path="/upload-photo" element={<UploadPhoto/>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
