import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa';

const Form3 = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/forms/form3', { method: form.method, body: formData })
    .then(() => {
      navigate('/confirmation');
    });
  }

  return (
    <div>
    <form method='post' onSubmit={handleSubmit}>
      <input type='text' name='cc' defaultValue='Credit Card #'/>
      <input type='text' name='exp' defaultValue='Expiry'/>
      <input type='text' name='cvv' defaultValue='CVV'/>
      <input type='text' name='billzip' defaultValue='Billing ZIP'/>
      <button type='submit'> <FaArrowRight/> </button>
    </form>

  </div>
)}

export default Form3;