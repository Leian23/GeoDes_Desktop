import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import Login from './components/login-signup/login';
import SignUp from './components/login-signup/signup';
import MapView from './components/mapview/map_container';
import Sidebar from './components/cardview_map/sidebar';
import Alerts from './components/cardview_map/alertslayout'




function App() {
  return (

    
    <Router>
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path = "/map_container" element={<MapView/>}/>
          <Route path = "/sidebar" element={<Sidebar/>}/>
          <Route path = "/alertslayout" element={<Alerts/>}/>

          
        </Routes>

    </Router>
  );
}

export default App;


//https://www.figma.com/file/C0uRkPaQZqDesCaNFZm6fY/Event-Reservation-System-team-library?type=design&node-id=0-1&t=YqNjQk08bYJbazGz-0//