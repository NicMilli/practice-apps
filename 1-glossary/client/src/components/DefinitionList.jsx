import React, {useState} from "react";
import { render } from "react-dom";
import DefinitionItem from './DefinitionItem.jsx';

const DefinitionList = ({ words, deleteHandler, handleEditChange }) => {

  return (
    <div>
      {words.map((word, index) => {
        return <DefinitionItem word={word} key={index} deleteHandler={deleteHandler} handleEditChange={handleEditChange}/>
      })}
    </div>
  );
}

  export default DefinitionList;
