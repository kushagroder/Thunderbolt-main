import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Login/Register/Register';
import Login from './components/Login/Register/Login';
import Home from './components/Home';
import List_images from './components/List_Images/List_images';
import MainComponent from './components/Container/MainComponent';
import MainComponent_IP from './components/IP_Whitelist/MainComponent_IP';

function App() {
  const [environment, setEnvironment] = useState(null); 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/List_images" element={<List_images />} />
          <Route path="/EnvironmentSelectionPage" element={<MainComponent environment={environment} setEnvironment={setEnvironment} />} />
          <Route path="/EnvironmentSelection_IP" element={<MainComponent_IP environment_ip={environment} setEnvironment={setEnvironment} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;