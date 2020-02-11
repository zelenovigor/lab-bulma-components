import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import Navbar from './Navbar'
import FormField from "./FormField";

function App() {
  return (
    <div className="App">
      <nav id="navbar" className="bd-navbar navbar has-shadow is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <span>
              <a className="home-item">Home</a>
            </span>
          </div>
          <div className="nav-left">
            <button id="bt1">Login </button>
            <button id="bt2">Sign Up </button>
          </div>
        </div>
      </nav>
      <FormField className="cool" label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField className="cool2"  label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    </div>
  );
}
export default App;
