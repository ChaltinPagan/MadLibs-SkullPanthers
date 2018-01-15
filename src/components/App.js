import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MadLibsHandle from "./MadLibsHandle";


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/madlibs" component={MadLibsHandle} />
      </Switch>
      <iframe id="ytplayer" type="text/html" width="1" height="1"
        src="https://www.youtube.com/embed/9J50VzjsIno?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&playsinline=1&showinfo=0&start=4"
        frameborder="0" allowfullscreen></iframe>
    </div>
  )
};

export default App;