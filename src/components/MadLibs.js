import React from 'react';
import { Link } from 'react-router-dom';

const madStyles = {
  p: {
    fontWeight: "bold"
  },
  input: {
    marginBottom: "20px"
  }
}

const MadLibs = ({ onChange, value, onClick }) => {
  return (
    <div>
      
      <p id="ptags">{"Type in a word or click 'random.'"}</p>

      Color:<br/>
      <input id="color" 
      className="input" 
      placeholder="Enter a color..."
      type="text" 
      value={value.color}
      style={madStyles.input}
      onChange={onChange} />{" "}
      <button id="color" onClick={onClick}>random</button><br />

      Noun (plural):<br />
      <input id="nounPlural" 
      className="input"
      placeholder="Enter a noun (plural)..."
      type="text"
      value={value.nounPlural}
      style={madStyles.input}
      onChange={onChange} />{" "}
      <button id="nounPlural" onClick={onClick}>random</button><br />
      
      Noun:<br />
      <input id="noun" 
      className="input"
      placeholder="Enter a noun..."
      type="text"
      value={value.noun}
      style={madStyles.input}
      onChange={onChange} />{" "}
      <button id="noun" onClick={onClick}>random</button><br />
      
      Adjective:<br />
      <input id="adjective" 
      className="input"
      placeholder="Enter an adjective..."
      type="text"
      value={value.adjective}
      style={madStyles.input}
      onChange={onChange} />{" "}
      <button id="adjective" onClick={onClick}>random</button><br />

    </div>
  )
}

export default MadLibs;