import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Home = () => {


  return (
    <div>
    <h1>Checkout: <Link to='/Form1'><FaShoppingCart/></Link></h1>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
  </div>
)}

export default Home;