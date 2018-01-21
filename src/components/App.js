import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MadLibsHandle from "./MadLibsHandle";
import About from "./About";

const styles = {
  about: {
    float: "right",
    top: "0",
    marginRight: "20px",
    color: "teal",
    fontFamily: "Monoton"
  }
}

const App = () => {
  return (
    <div>
      <Link to="/about"><h2 style={styles.about}>ABOUT</h2></Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/madlibs" component={MadLibsHandle} />
        <Route path="/about" component={About} />
      </Switch>
      <iframe id="ytplayer" type="text/html" width="1" height="1"
        src="https://www.youtube.com/embed/9J50VzjsIno?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&playsinline=1&showinfo=0&start=4"
        frameborder="0" allowfullscreen></iframe>
    </div>
  )
};

export default App;