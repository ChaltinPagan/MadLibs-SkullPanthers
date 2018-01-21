import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import MadLibs from "./MadLibs";
import Result from "./Result";
import About from "./About";
import wordsAPI from '../api/wordsAPI';

const styles = {
  button: {
    marginRight: "20px"
  }
}

class MadLibsHandle extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "",
      nounPlural: "",
      noun: "", 
      adjective: ""
    }
    this.phrase = `The ${this.state.noun} jumped over the ${this.state.nounPlural} in double ${this.state.adjective} during the ${this.state.color} moon.`
  };

  handleRandom = e => {
    const id = e.target.id;
    if (id === 'color') {
      this.setState({ color: wordsAPI.randColor() });
    } else if (id === 'nounPlural') {
      this.setState({ nounPlural: wordsAPI.randPlural() });
    } else if (id === 'noun') {
      this.setState({ noun: wordsAPI.randNoun() })
    } else if (id === 'adjective') {
      this.setState({ adjective: wordsAPI.randAdj() })
    }
  }

  handleAllRandom = (e) => {
    this.setState({
      color: wordsAPI.randColor(),
      nounPlural: wordsAPI.randPlural(),
      noun: wordsAPI.randNoun(),
      adjective: wordsAPI.randAdj()
    })
  }

  componentDidMount() {
    this.handleAllRandom();
  }

  handleReset = () => {
    this.setState({
      color: "",
      nounPlural: "",
      noun: "",
      adjective: ""
    })
  }

  renderMadLibs = () => {
    const { color, nounPlural, noun, adjective } = this.state;
    return (
      <div>

        <MadLibs 
          value={this.state}
          onClick={this.handleRandom} />

        <Link to="/madlibs/result"><button style={styles.button}>Submit</button></Link>
        <button style={styles.button} 
          onClick={this.handleReset}>Reset</button>

        <button style={styles.button} 
          onClick={this.handleAllRandom}>All Random</button>

      </div>
    )
  }

  renderResult = () => {
    const { color, nounPlural, noun, adjective } = this.state;
    return (
      <Result
        color={color}
        nounPlural={nounPlural}
        noun={noun}
        adjective={adjective} />
    )
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Link to="/">
          <div id="logo"></div>
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
        <Switch>
          <Route exact path="/madlibs" render={this.renderMadLibs} />
          <Route path="/madlibs/result" render={this.renderResult} />
      </Switch>
      </div>
    )
  }
}

export default MadLibsHandle;