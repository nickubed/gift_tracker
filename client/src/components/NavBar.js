import React, {useEffect} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import M from "materialize-css";

const NavBar = () => {

  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  });

  return (
    <div>
      <Router>
      <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Gift Tracker</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/new">Add Recipient</Link></li>
          <li><Link to="/budget">Check Budget</Link></li>
          <li><Link to="/main">Home</Link></li>
          <li><Link to="/logout">Log Out</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      </div>
      </nav>

      <ul id="slide-out" class="sidenav">
        <li><Link to="/new">Add Recipient</Link></li>
        <li><Link to="/budget">Check Budget</Link></li>
        <li><Link to="/main">Home</Link></li>
        <li><Link to="/logout">Log Out</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
      <a href="/" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </Router>
    </div>
  )
};

export default NavBar;