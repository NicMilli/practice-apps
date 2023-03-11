import React from 'react';
import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa';

const Confirmation = ({handleConfirm}) => {

  //Pull data from db useing useEffect

  //confirm and post confirmed to /forms/confirmation

  return (
  <p>
    Confirmation
    Display from DB
    <button>Confirm selection</button>
    <Link to='/'> <FaHome/> </Link>
  </p>
)}

export default Confirmation;