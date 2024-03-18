import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import List_images from "./components/List_images";
import IP_Whitelist from "./components/IP_Whitelist";
import Manage_containers from "./components/Manage_container";
import React from 'react';


function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/" element= { <Register/>} />
              <Route path="/Login" element= { <Login/>} />
              <Route path="/List_images" element= { <List_images/>} />
              <Route path="/Manage_containers" element= { <Manage_containers/>} />
              <Route path="/IP_Whitelist" element= { <IP_Whitelist/>} />
              
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;

