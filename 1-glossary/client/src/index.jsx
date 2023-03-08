import React, { useState } from "react";
import { render } from "react-dom";
import DefinitionList from './components/DefinitionList.jsx'


const App = () => {
  const [wordList, setWordList] = useState([{name: 'momo', definition: 'best kitty'}])

  const submitHandler = (formData) => {
    //addInput to wordlist for now, db later
    setWordList([...wordList, formData]);
  };

  return (
    <div>
    <h1>Glossary App</h1>
    <DefinitionList submitHandler={submitHandler} words={wordList}/>
  </div>
  )
}

render(<App/>, document.getElementById("root"));
