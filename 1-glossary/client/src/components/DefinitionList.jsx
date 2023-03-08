import React, {useState} from "react";
import { render } from "react-dom";
import DefinitionItem from './DefinitionItem.jsx';

const DefinitionList = ({ words, submitHandler, deleteHandler, handleEditChange }) => {
  const [formData, setFormData] = useState({name: '', definition: ''});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(formData);
    setFormData({name: '', definition: ''});
  }

  return (
    <div>
      <form type='submit' onSubmit={handleSubmit}>
        <label>
          Word: <input onChange={handleChange} name='name' value={formData.name}/>
        </label>
        &nbsp;
        <label>
          Definition: <input onChange={handleChange} name='definition' value={formData.definition}/>
        </label>
        <button>submit</button>
      </form>
      {words.map((word, index) => {
        return <DefinitionItem word={word} key={index} deleteHandler={deleteHandler} handleEditChange={handleEditChange}/>
      })}
    </div>
  );
}

  export default DefinitionList;
