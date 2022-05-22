import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Routes>     
          <Route exact path="/" element={<Login/>}/>  
          <Route exact path="/register/" element={<Register/>}/>    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
