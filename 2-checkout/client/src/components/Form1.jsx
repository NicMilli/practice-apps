import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa';
import axios from 'axios';

const Form1 = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    console.log(formData.entries())
    axios.post('/forms/form1', formData)
    .then(() => {
      navigate('/Form2');
    });
  }

  return (
  <div>
    <form method='post' onSubmit={handleSubmit}>
      <input type='text' name='name' defaultValue='Name' required={true}/>
      <input type='email' name='email' defaultValue='Email' required={true}/>
      <input type='password' name='password' defaultValue='Password' required={true}/>
      <button type='submit'> <FaArrowRight/> </button>
    </form>

  </div>
)}

export default Form1;