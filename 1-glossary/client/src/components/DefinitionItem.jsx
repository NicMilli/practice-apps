import React from "react";
import { render } from "react-dom";
import {FaRegTrashAlt, FaPencilAlt} from 'react-icons/Fa';

const DefinitionItem = ({ word }) => {
  return (
  <div>
    <div style={{display: 'flex'}}>
      {word.name} = {word.definition}
      &nbsp;
      <FaRegTrashAlt />
      &nbsp;
      <FaPencilAlt />
    </div>

  </div>
);
  }

  export default DefinitionItem;