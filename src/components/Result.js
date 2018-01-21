import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ color, nounPlural, noun, adjective }) => {

  let phrases = [
    `The ${noun} jumped over the ${nounPlural} in double ${adjective} during the ${color} moon.`,
    `Ask not what ${adjective} ${nounPlural} can do for you, but what ${noun} can do for ${color} cats.`,
    `Don't trust ${adjective} millenials with over 30 ${nounPlural}, especially if their ${noun} wears ${color} shoes.`
  ];

  let random = Math.floor(Math.random() * phrases.length);

  return (
    <div>
      <h2>{"Here's Your Mad Lib"}</h2>
      <p>Words:{" "}{color}{", "}{nounPlural}{", "}{noun}{", "}{adjective}<br /></p>
      <p></p>
      <p>{phrases[random]}</p>
      <Link to="/madlibs">Back</Link>
    </div>
  )
}

export default Result;