import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import DefinitionList from './components/DefinitionList.jsx';
import FormView from './components/FormView.jsx';
import axios from 'axios';


const App = () => {
  const [wordList, setWordList] = useState([]);
  const [searchList, setSearchList] = useState([])

  useEffect(() => {
    getAllWords().then((result) => {
      setWordList(result.data);
    });
  }, [])

  const getAllWords = () => {
    return axios.get('/words');
  }

  const submitHandler = (formData) => {
    //addInput to wordlist for now, db later
    axios.post('/words', formData).then(() => {
      return getAllWords();
    }).then((result) => {
      setWordList(result.data);
    });

  };

  const deleteHandler = (item) => {
    axios({
      method: 'delete',
      url: '/words',
      data: item
    }).then(() => {
      return getAllWords();
    }).then((result) => {
      setWordList(result.data);
    })
  }

  const handleEditChange = (previousItem, newItem) => {
    axios({
      method: 'put',
      url: '/words',
      data: {
        previousItem, newItem
      }
    }).then(() => {
      return getAllWords();
    }).then((result) => {
      setWordList(result.data);
    })
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
