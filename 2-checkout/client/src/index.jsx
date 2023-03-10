import React from "react";
import { render } from "react-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FormO from './components/FormO.jsx';
import FormT from './components/FormT.jsx';
import FormTh from './components/FormTh.jsx';

function App() {

  return (
  <Router>
    <div>
    <Routes>
      <Route exact path='/' element={<h1>Home</h1>}/>
      <Route path='/formO' element={<FormO />} />
      <Route path='/formT' element={<FormT />} />
      <Route path='/formTh' element={<FormTh />} />
    </Routes>
    </div>
  </Router>
)
}


render(<App/>, document.getElementById("root"));
