import React, { useState } from "react";
import { render } from "react-dom";
import DefinitionList from './components/DefinitionList.jsx';
import FormView from './components/FormView.jsx';


const App = () => {
  const [wordList, setWordList] = useState([{name: 'momo', definition: 'best kitty'}]);
  const [searchList, setSearchList] = useState([])

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

  const searchHandler = (term) => {
    var tempList = [];
    wordList.map((word) => {
      if (word.name.includes(term)) {
        tempList.push(word);
      }
    });
    setSearchList(tempList);
  };

  return (
    <div>
    <h1>Glossary App</h1>
    <FormView submitHandler={submitHandler} searchHandler={searchHandler}/>
    <DefinitionList deleteHandler={deleteHandler} words={searchList.length > 0 ? searchList : wordList} handleEditChange={handleEditChange}/>
  </div>
  )
}

render(<App/>, document.getElementById("root"));
