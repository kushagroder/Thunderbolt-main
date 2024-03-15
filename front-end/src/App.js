import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/" element= { <Register/>} />
              <Route path="/Login" element= { <Login/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;