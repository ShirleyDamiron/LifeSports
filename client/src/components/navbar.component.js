import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function Navbar(){ 
    return (
      <nav>
        <Link to="/" className="navBrand">LifeSports</Link>
        <div>
        <ul className="ulContainer">
          <li className="">
          <Link to="/" className="navLink">Exercises</Link>
          </li>
          <li className="">
          <Link to="/create" className="navLink">Post New Workout</Link>
          </li>
          <li className="">
          <Link to="/user" className="navLink">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );  
}
export default Navbar