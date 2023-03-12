import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import {FaHome} from 'react-icons/fa';
import axios from 'axios';

const Confirmation = () => {
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();
  const {name, email, password, line1, line2, state, zip, city, phoneNo, cvv, cc, billingZip, confirmation} = responses;

  //Pull data from db useing useEffect
  useEffect(() => {
    axios.get('/forms').then(({data}) => {
      console.log(data[0][0].confirmation)
      setResponses(data[0][0]);
    })
  }, [])

  //confirm and post confirmed to /forms/confirmation
  const handleConfirm = () => {
    axios.post('/forms/confirmation').then(() => {
      navigate('/');
    })
  }

  return (
  <div>
    Confirmation
    <p>
        {name} {email} ***
    </p>
    <p>
        {line1} {line2} {state} {city} {zip} {phoneNo}
    </p>
    <p>
        {cc} *** {billingZip}
    </p>

    <button onClick={handleConfirm}>Confirm selection</button>
    <Link to='/'> <FaHome/> </Link>
  </div>
)}

export default Confirmation;