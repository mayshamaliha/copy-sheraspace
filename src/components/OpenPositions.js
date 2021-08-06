import React from 'react';
import './myStyle.css';
import {Link} from "react-router-dom";


const OpnePositions = () => {
    return(
        <div>
            <h1>Open Positions</h1>
            <ul id="items">
    <li><h3>Sales</h3>
        <p id="positionName">Sales Intern</p>
        <p>View Details</p>
        <Link to="/career">
            <button id="submit-button"> View </button>
        </Link>
        
    </li>
    <li><h3>Sales</h3>
        <p id="positionName">Business Development Intern</p>
        <p>View Details</p>
        <Link to="/career">
            <button id="submit-button"> View </button>
        </Link>
    </li>
    <li><h3>Creative</h3>
        <p id="positionName">Graphic Designer</p>
        <p>View Details</p>
        <Link to="/career">
            <button id="submit-button"> View </button>
        </Link>
    </li>
    <li><h3>Software Engineering</h3>
        <p id="positionName">Software Engineer Intern</p>
        <p>View Details</p>
        <Link to="/career">
            <button id="submit-button"> View </button>
        </Link>
    </li> 
    <li><h3>Marketing</h3>
        <p id="positionName">Marketing Associate</p>
        <p>View Details</p>
        <Link to="/career">
            <button id="submit-button"> View </button>
        </Link>
    </li>
  </ul>
        </div>
    )
}
export default OpnePositions;