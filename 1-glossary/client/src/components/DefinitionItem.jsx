import React, {useState} from "react";
import { render } from "react-dom";
import {FaRegTrashAlt, FaPencilAlt} from 'react-icons/Fa';

const DefinitionItem = ({ word, deleteHandler, handleEditChange }) => {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState(word);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleEdit = (e) => {
    setEdit(prevEdit => !prevEdit);
  }

  const handleDelete = (e) => {
    deleteHandler(word);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditChange(word, formData);
    setEdit(false);
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        {edit ?
          <>
            <form type='submit' onSubmit={handleSubmit}>
              <input onChange={handleChange} name='name' value={formData.name}/>
              &nbsp;
              <input onChange={handleChange} name='definition' value={formData.definition}/>
              <button>change</button>
            </form>
            <button onClick={handleEdit}> Cancel edit </button>
          </>

        : <div>{word.name} = {word.definition}
            &nbsp;
            <button onClick={handleEdit}> <FaPencilAlt /> </button>
            &nbsp;
            <button> <FaRegTrashAlt onClick={handleDelete}/> </button>
          </div>
        }

      </div>
    </div>
);
  }

  export default DefinitionItem;