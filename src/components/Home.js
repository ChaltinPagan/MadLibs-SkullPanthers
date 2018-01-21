import React from 'react';
import { Link } from 'react-router-dom';
import About from "./About";

const Home = () => {
  return (
    <div>
      <Link to="/">
        <div id="logo"></div>
      </Link>

      <div className="book">
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="page turn"></span>
        <span className="cover"></span>
        <span className="page"></span>
        <span className="cover turn"></span>
      </div>

      <header className="flexcontainer">
        <div id="letters">
          <div id="M"> M </div>
          <div id="A"> A </div>
          <div id="D"> D </div>
          <div id="L"> L </div>
          <div id="I"> i </div>
          <div id="B"> B </div>
        </div>
      </header>
      
      <Link to="/madlibs/"><button id="playbutton">CLICK TO PLAY</button></Link>
    </div>
  )
}

export default Home;
