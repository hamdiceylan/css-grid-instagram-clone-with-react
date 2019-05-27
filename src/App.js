import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Modal } from './Modal/Modal'
import { Gallery } from './Gallery/Gallery'
 
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/img/:id" component={Modal} />
        </Switch>
    </Router>
  );
}

export default App;
