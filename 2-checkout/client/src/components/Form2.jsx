import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa';

const Form2 = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/forms/form2', { method: form.method, body: formData })
    .then(() => {
      navigate('/Form3');
    });
  }

  return (
    <div>
    <form method='post' onSubmit={handleSubmit}>
      <label> Shipping address:
        <input type='text' name='line1' defaultValue='Addr line 1'/>
        <input type='text' name='line2' defaultValue='Addr line 2'/>
        <input type='text' name='city' defaultValue='City'/>
        <input type='text' name='state' defaultValue='State'/>
        <input type='number' name='zip' defaultValue='ZIP'/>
        <input type='text' name='phoneNo' defaultValue='Phone number'/>
      </label>
      <button type='submit'> <FaArrowRight/> </button>
    </form>

  </div>
)}

export default Form2;