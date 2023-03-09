import React, {useState} from "react";
import { render } from "react-dom";

const FormView = ({ submitHandler, searchHandler}) => {
  const [formData, setFormData] = useState({name: '', definition: ''});
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'searchTerm') {
      setSearchTerm(e.target.value);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(formData);
    setFormData({name: '', definition: ''});
  }

  const handleSearch = (e) => {
    e.preventDefault();
    searchHandler(searchTerm);
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
      <form type='submit' onSubmit={handleSearch}>
        <label>
          Search a word: <input onChange={handleChange} name='searchTerm' value={searchTerm}/>
        </label>
        <button>search</button>
      </form>
    </div>
  );
}

  export default FormView;
