import React, {useState} from "react";
import { render } from "react-dom";
import DefinitionItem from './DefinitionItem.jsx';

const DefinitionList = ({ words, deleteHandler, handleEditChange }) => {

  return (
    <div>
      {words.map((word) => {
        return <DefinitionItem word={word} key={word._id} deleteHandler={deleteHandler} handleEditChange={handleEditChange}/>
      })}
    </div>
  );
}

  export default DefinitionList;
