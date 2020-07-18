import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Portfolio from "./pages/portfolio";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Wrapper>
          <Route exact path="/" component={Profile} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
