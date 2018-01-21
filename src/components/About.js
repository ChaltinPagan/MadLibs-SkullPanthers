import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  ul: {
    listStyleType: "none"
  }
}

const About = () => {
  return (
    <div>
      <Link to="/">
        <div id="logo">
        </div>
      </Link>

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

      <h2>About</h2>
      <p>Coded by supergroup The Skull Panthers</p>
      <ul style={styles.ul}>
        <a href="https://github.com/JohnAlston11" target="_blank"><li>John Alston</li></a>
        <a href="https://www.linkedin.com/in/kevin-anderson-54ba97150/" target="_blank"><li>Kevin Anderson</li></a>
        <li>Susana Han</li>
        <a href="https://github.com/tek2master" target="_blank"><li>Thomas Kenney, Jr.</li></a>
        <a href="https://www.linkedin.com/in/chaltinpagan/" target="_blank"><li>Chaltin Pagan</li></a>
        <li>Asia Sewer</li>
      </ul>
      <p></p>
      <a href="https://github.com/ChaltinPagan/MadLibs-SkullPanthers" target="_blank" >
        <p>Find this project on GitHub</p>
      </a>
    </div>
  )
}

export default About;