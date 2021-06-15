import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Hero from '../src/components/Hero';
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path={["/react-portfolio", "/"]}component={Hero}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component= {Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>  
    </Router>
  );

}
  


export default App;
