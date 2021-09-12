import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import FooterSection from "./components/FooterSection/FooterSection";
import Home from "./containers/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <FooterSection />
    </Router>
  );
}

export default App;
