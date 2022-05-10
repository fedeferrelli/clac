import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Monto from './Components/Monto.jsx'
import Cuota from './Components/Cuota'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Periodos from './Components/Periodos'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/"
        element={<Home />}/>
          
        
        <Route path="/monto-a-financiar" element={<Monto />}/>

        <Route path="/cuota-a-pagar" element={<Cuota />}/>

        <Route path="/periodos" element={<Periodos />}/>

             </Routes>
    </Router>
    
  );
}



export default App
