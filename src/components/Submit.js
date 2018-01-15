import React from 'react';
import { Link } from 'react-router-dom';

const Submit = ({ color, nounPlural, noun, adjective}) => {
  return (
    <div>
      <h2>{"Here's Your Mad Lib"}</h2>
      {color}<br />
      {nounPlural}<br />
      {noun}<br />
      {adjective}<br />
      <p></p>
      <Link to="/madlibs">Back</Link>
    </div>
  )
}

export default Submit;