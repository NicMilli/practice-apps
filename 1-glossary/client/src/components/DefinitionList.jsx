import React, {useState} from "react";
import DefinitionItem from './DefinitionItem.jsx';
import Card from './Card.jsx';

const DefinitionList = ({ words, deleteHandler, handleEditChange, cardMode }) => {

  return (
    <div>
      {cardMode ? <Card words={words}/>
      : words.map((word) => {
        return <DefinitionItem word={word} key={word._id} deleteHandler={deleteHandler} handleEditChange={handleEditChange}/> })
      }
    </div>
  );
}

  export default DefinitionList;
