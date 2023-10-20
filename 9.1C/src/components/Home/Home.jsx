import React from "react";
import styles from "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className='nav'>
    <div className='center'>
        <h3>DEV@Deakin</h3>
    </div>
    <div className="center">
        <input type="text" id="search-bar" Searchholder='Search...'></input>
    </div>
  
        <div className="emailbutton">Post</div>

        <div className="emailbutton">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </div>
  
    </div>
  );
}

export default Home;