import React, {useState} from "react";
import { render } from "react-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Form1 from './components/Form1.jsx';
import Form2 from './components/Form2.jsx';
import Form3 from './components/Form3.jsx';
import Confirmation from './components/Confirmation.jsx';
import Home from './Home.jsx';

function App() {

  const handleClick = () => {
    console.log('checkout')
  }

  const handleConfirm = () => {
    console.log('confirm')
  }

  return (
  <Router>
    <div>
    <Routes>
      <Route exact path='/' element={<Home handleClick={handleClick}/>}/>
      <Route path='/form1' element={<Form1 />} />
      <Route path='/form2' element={<Form2 />} />
      <Route path='/form3' element={<Form3 />} />
      <Route path='/confirmation' element={<Confirmation />} />
    </Routes>
    </div>
  </Router>
)
}


render(<App/>, document.getElementById("root"));
