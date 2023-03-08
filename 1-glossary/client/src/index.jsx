import React, { useState } from "react";
import { render } from "react-dom";
import DefinitionList from './components/DefinitionList.jsx'


const App = () => {
  const [wordList, setWordList] = useState([{name: 'momo', definition: 'best kitty'}])

  const submitHandler = (formData) => {
    //addInput to wordlist for now, db later
    setWordList([...wordList, formData]);
  };

  const deleteHandler = (item) => {
    var list = wordList.slice();
    var ind = list.indexOf(item);
    list = list.slice(0, ind).concat(list.slice(ind+1, list.length));
    setWordList(list);
  }

  const handleEditChange = (previousItem, newItem) => {
    var list = wordList.slice();
    var ind = list.indexOf(previousItem);
    list[ind] = newItem;
    setWordList(list);
  }

  return (
    <div>
    <h1>Glossary App</h1>
    <DefinitionList submitHandler={submitHandler} deleteHandler={deleteHandler} words={wordList} handleEditChange={handleEditChange}/>
  </div>
  )
}

render(<App/>, document.getElementById("root"));
